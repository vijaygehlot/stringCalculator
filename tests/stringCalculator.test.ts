import { StringCalculator } from "../src/stringCalculator";

 

describe("StringCalculator - Step 1", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test(`It should return 0 for an "" (empty) string"`, () => {
    expect(calculator.add("")).toBe(0);
  });

  test("It should return the number itself when a single number is passed", () => {
    expect(calculator.add("1")).toBe(1);
 
  });

  test("It should return the sum of two numbers", () => {
    expect(calculator.add("1,5")).toBe(6);
   
  });

  test("It should return the sum of multiple numbers", () => {
    expect(calculator.add("1,2,3,4,5,6,7,8,9,0")).toBe(45);
   
  });
});
