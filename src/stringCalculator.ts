export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    let delimiter = [",", "\n"];

    // Step 4:  custom delimiter
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = [parts[0].substring(2)]; 
      numbers = parts[1]; // 
    }

  
    const numbersArray = this.customSplit(numbers, delimiter).map(Number);

    // Step 5: Check for negative numbers
    const negatives = numbersArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(
        negatives.length === 1
          ? `Negative number not allowed: ${negatives[0]}`
          : `Negative numbers not allowed: ${negatives.join(", ")}`
      );
    }



    return numbersArray.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
  }


  private customSplit(numbers: string, delimiters: string[]): string[] {
    let result = [numbers];
    for (const delimiter of delimiters) {
      result = result.flatMap(str => str.split(delimiter));
    }
    return result;
  }
}
