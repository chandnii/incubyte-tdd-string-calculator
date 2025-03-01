export function add(numbers: string): number {
  if (!numbers) return 0;

  let delimiter = /,|\n/; // Default delimiters (comma or newline)
  let numString = numbers;

  // Check for custom delimiter syntax: "//[delimiter]\n[numbers...]"
  const delimiterMatch = numbers.match(/^\/\/(.+)\n(.*)/);
  if (delimiterMatch) {
    delimiter = new RegExp(delimiterMatch[1]); // Extract delimiter dynamically
    numString = delimiterMatch[2]; // Extract numbers part
  }

  // Convert string to number array
  const numArray = numString.split(delimiter).map(Number);

  // Handle negative numbers
  const negatives = numArray.filter(num => num < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed ${negatives.join(', ')}`);
  }

  // Return sum
  return numArray.reduce((sum, num) => sum + num, 0);
}
