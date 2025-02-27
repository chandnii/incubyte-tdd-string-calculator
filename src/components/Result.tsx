interface ResultProps {
    result: number | null;
  }
  
  export default function Result({ result }: ResultProps) {
    return (
      <h2 className="text-xl font-semibold mt-4 text-center">
        Result: {result !== null ? result : "-"}
      </h2>
    );
  }
  