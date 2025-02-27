export function add(numbers: string): number {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  let numString = numbers;

  // Check for custom delimiter
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    numString = parts.slice(1).join("\n"); 
  }

  const numArray = numString.split(delimiter).map(Number);

  // Validate negative numbers
  const negatives = numArray.filter(num => num < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}
