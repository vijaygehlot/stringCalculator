import { StringCalculator } from "../src/stringCalculator";

describe("StringCalculator - Step 1", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test(`Step 1: It should return 0 for an "" (empty) string"`, () => {
    expect(calculator.add("")).toBe(0);
  });

  test("Step 1: It should return the number itself when a single number is passed", () => {
    expect(calculator.add("1")).toBe(1);
  });

  test("Step 1: Single number should return the number itself", () => {
    expect(calculator.add("1")).toBe(1);
  });
  test("Step 2: It should return the sum of two numbers", () => {
    expect(calculator.add("1,5")).toBe(6);
  });

  test(" Step 2: It should return the sum of multiple numbers", () => {
    expect(calculator.add("1,2,3,4,5,6,7,8,9,0")).toBe(45);
  });

  test("Step 3: It should return 6 for input '1\\n2,3'", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });
  test("Step 3: It should return the sum of numbers separated by new lines", () => {
    expect(calculator.add("4\n3\n6")).toBe(13);
  });

  test("Step 4: It's support different delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  test("Step 4: It's support another delimiter", () => {
    expect(calculator.add("//|\n4|6|7")).toBe(17);
  });

  test("Step 5: Negative numbers should throw an error", () => {
    expect(() => calculator.add("1,-3,5")).toThrow("Negative number not allowed: -3");
  });

  test("Step 5: Multiple negative numbers should be listed in the error message", () => {
    expect(() => calculator.add("-9,-4,-5")).toThrow("Negative numbers not allowed: -9, -4, -5");
  });

  //  Ignore numbers greater than 1000
  test("Step 5: Numbers greater than 1000 should be ignored", () => {
    expect(calculator.add("5,1001")).toBe(5);
  });
});
