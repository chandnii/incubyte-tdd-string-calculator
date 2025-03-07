import { useState, useEffect } from "react";
import { add } from "../utils/stringCalculator";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      setError(null);
      console.log("Input before calculation:", input);
      const calculationResult = add(input);
      console.log("Calculation Result:", calculationResult);
      setInput(calculationResult.toString());
    } catch (err) {
      console.error("Error in calculation:", err);
      setError((err as Error).message);
    }
  };
  

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setInput((prev) => {
        if (/\d|,/.test(event.key)) {
          return prev + event.key;
        } else if (event.key === "Backspace") {
          return prev.slice(0, -1);
        } else if (event.key === "Enter") {
          setTimeout(handleCalculate, 0); // Ensure latest state is used
        }
        return prev;
      });
    };    

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden fixed inset-0">
      <h2 className="text-2xl font-bold mb-4">Incubyte Assignment</h2>
      <div className="text-black p-8 rounded-2xl shadow-2xl w-full max-w-md border-4">
        <input 
          type="text"
          value={input}
          readOnly
          className="w-full text-right p-6 rounded-md mb-6 text-4xl font-mono shadow-inner border border-gray-600 focus:outline-none tracking-wide"
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
