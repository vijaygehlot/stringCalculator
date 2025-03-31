import { StringCalculator } from "./src/stringCalculator"; 

const stringCalculator = new StringCalculator();

console.log(stringCalculator.add(""));            
console.log(stringCalculator.add("1"));           
console.log(stringCalculator.add("1,2"));         
console.log(stringCalculator.add("1\n2,3"));      
console.log(stringCalculator.add("//;\n1;2"));    

try {
  console.log(stringCalculator.add("-1,3,-5"));  
} catch (error) {
  console.error(error);
}
