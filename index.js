"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringCalculator_1 = require("./src/stringCalculator"); // Import the StringCalculator class
var calculator = new stringCalculator_1.StringCalculator();
console.log(calculator.add(""));
console.log(calculator.add("1"));
console.log(calculator.add("1,2"));
console.log(calculator.add("1\n2,3"));
console.log(calculator.add("//;\n1;2"));
try {
    console.log(calculator.add("-1,3,-5"));
}
catch (error) {
    console.error(error);
}
