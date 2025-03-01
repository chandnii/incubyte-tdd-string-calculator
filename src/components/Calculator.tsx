import { useState } from "react";
import { add } from "../utils/stringCalculator";
import Result from "./Result";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      setError(null);
      const calculationResult = add(input);
      setInput(calculationResult.toString());
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-2xl w-full max-w-md border-4 border-gray-700">
        <input 
          type="text"
          value={input}
          readOnly
          className="w-full bg-gray-800 text-right p-6 rounded-md mb-6 text-4xl font-mono shadow-inner border border-gray-600 focus:outline-none tracking-wide"
        />
        <div className="grid grid-cols-4 gap-3">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ",", "\n"].map((char) => (
            <button
              key={char}
              onClick={() => setInput(input + char)}
              className="bg-gray-700 text-white p-6 rounded-xl text-2xl font-semibold hover:bg-gray-600 transition-transform transform active:scale-95 shadow-lg"
            >
              {char === "\n" ? "↵" : char}
            </button>
          ))}
          <button
            onClick={handleCalculate}
            className="col-span-2 bg-green-500 text-white p-6 rounded-xl text-2xl font-semibold hover:bg-green-600 transition-transform transform active:scale-95 shadow-lg"
          >
            ➡
          </button>
          <button
            onClick={() => setInput("")}
            className="col-span-2 bg-red-500 text-white p-6 rounded-xl text-2xl font-semibold hover:bg-red-600 transition-transform transform active:scale-95 shadow-lg"
          >
            ⌫
          </button>
        </div>
        {error && <p className="mt-4 text-red-400 font-semibold animate-pulse text-lg text-center">{error}</p>}
      </div>
    </div>
  );
}
