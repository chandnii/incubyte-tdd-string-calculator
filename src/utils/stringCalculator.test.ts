import { describe, expect, it } from "vitest";
import { add } from "../utils/stringCalculator";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return the number itself when a single number is provided", () => {
    expect(add("5")).toBe(5);
  });

  it("should return sum of two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  it("should return sum of multiple comma-separated numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  it("should handle newline as a delimiter", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it("should handle custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  it("should handle different delimiters properly", () => {
    expect(add("//#\n2#3#4")).toBe(9);
  });

  it("should handle a mix of commas and newlines", () => {
    expect(add("1\n2,3\n4")).toBe(10);
  });

  it("should return 0 for non-numeric inputs", () => {
    expect(add("a,b,c")).toBe(0);
  });

  it("should ignore numbers greater than 1000", () => {
    expect(add("2,1001")).toBe(2);
  });
});
