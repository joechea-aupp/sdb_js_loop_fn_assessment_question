/**
You are tasked with creating a program that calculates the average score of students in a class. 
Write a JavaScript function named `calculateAverageScore` that takes in an array of scores and 
returns the average score rounded to the nearest whole number. Additionally, ensure that your program includes the following:

1. Use a loop to iterate through the array of scores.
2. Inside the loop, use a conditional statement to filter out any scores that are negative.
3. Implement error handling to ensure that the input is valid (i.e., an array of numbers).

Your function should adhere to the following specifications:

- Function Name: `calculateAverageScore`
- Parameter: `scores` (an array of numbers representing student scores)
- Return: The average score rounded to the nearest whole number
- Conditions:
  - If the `scores` parameter is not an array or if it contains any non-numeric values, the function should return `"Invalid input"`.
  - If all scores in the array are negative, the function should return `0`.

**Example Usage:**
```javascript
console.log(calculateAverageScore([85, 90, 75, 60])); // Output: 78
console.log(calculateAverageScore([-5, 80, 95, 70])); // Output: 82
console.log(calculateAverageScore([])); // Output: 0
console.log(calculateAverageScore([85, '90', 75, 60])); // Output: "Invalid input"
```

**Additional Instructions:**

- Ensure that your function is properly commented to explain its purpose and functionality.
- Test your function with different scenarios to validate its correctness.

 */
function calculateAverageScore(scores) {
  // your answer here!
}

module.exports = calculateAverageScore;
