import { describe, expect, it } from "vitest";
import { add } from "../utils/stringCalculator";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return the number itself for a single number input", () => {
    expect(add("1")).toBe(1);
  });

  it("should return the sum of two numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  it("should handle multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  it("should handle new lines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it("should support custom delimiters", () => {
    expect(add("//;\n1;2;3")).toBe(6);
  });

  it("should throw an error for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
  });
});