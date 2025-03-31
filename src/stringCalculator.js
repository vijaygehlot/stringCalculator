"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCalculator = void 0;
var StringCalculator = /** @class */ (function () {
    function StringCalculator() {
    }
    StringCalculator.prototype.add = function (numbers) {
        if (!numbers)
            return 0;
        var delimiter = [",", "\n"];
        // Step 4:  custom delimiter
        if (numbers.startsWith("//")) {
            var parts = numbers.split("\n");
            delimiter = [parts[0].substring(2)];
            numbers = parts[1]; // 
        }
        var numbersArray = this.customSplit(numbers, delimiter).map(Number);
        // Step 5: Check for negative numbers
        var negatives = numbersArray.filter(function (num) { return num < 0; });
        if (negatives.length > 0) {
            throw new Error(negatives.length === 1
                ? "Negative number not allowed: ".concat(negatives[0])
                : "Negative numbers not allowed: ".concat(negatives.join(", ")));
        }
        return numbersArray.filter(function (num) { return num <= 1000; }).reduce(function (sum, num) { return sum + num; }, 0);
    };
    StringCalculator.prototype.customSplit = function (numbers, delimiters) {
        var result = [numbers];
        var _loop_1 = function (delimiter) {
            result = result.flatMap(function (str) { return str.split(delimiter); });
        };
        for (var _i = 0, delimiters_1 = delimiters; _i < delimiters_1.length; _i++) {
            var delimiter = delimiters_1[_i];
            _loop_1(delimiter);
        }
        return result;
    };
    return StringCalculator;
}());
exports.StringCalculator = StringCalculator;
