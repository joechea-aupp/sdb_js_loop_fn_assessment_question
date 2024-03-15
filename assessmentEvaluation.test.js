const calculateAverageScore = require("./exercise_1_calculateAverageScore");
const fizzBuzzList = require("./exercise_2_fizzBuzz");
const removeDuplicate = require("./exercise_3_removeDuplicate");
const removeAfter = require("./exercise_4_removeAfter");
const replaceLastWithFirst = require("./exercise_5_replaceWithFirst");

// test 1_calculateAverageScore.js
test("calculateAverageScore is return result properly", () => {
  expect(calculateAverageScore([85, 90, 75, 60])).toBe(78);
  expect(calculateAverageScore([-5, 80, 95, 70])).toBe(82);
  expect(calculateAverageScore([])).toBe(0);
  expect(calculateAverageScore([85, "90", 75, 60])).toBe("Invalid input");
});

// // test 2_fizzBuzz.js
test("fizzBuzzList is return result properly", () => {
  expect(fizzBuzzList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15])).toStrictEqual([
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    "FizzBuzz",
  ]);
  expect(fizzBuzzList([9, 10, 11, 12, 13, 14, 15])).toStrictEqual([
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz",
  ]);
  expect(fizzBuzzList([])).toStrictEqual([]);
  expect(fizzBuzzList("not an array")).toBe(undefined);
});

// test 3_removeDuplicate.js
test("removeDuplicate is return result properly", () => {
  expect(removeDuplicate([1, 2, 2, 3, 4, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(removeDuplicate([1, 1, 1, 1, 1])).toStrictEqual([1]);
  expect(removeDuplicate([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(removeDuplicate([])).toStrictEqual([]);
  expect(removeDuplicate("not an array")).toBe(undefined);
});

test("removeAfter is return result properly", () => {
  expect(removeAfter([1, 2, 3, 4, 5], 3)).toStrictEqual([1, 2, 3]);
  expect(removeAfter([1, 1, 2, 2, 3, 3], 2)).toStrictEqual([1, 1, 2]);
  expect(removeAfter([], 2)).toStrictEqual([]);
  expect(removeAfter([1, 2, 3, 4, 5], 6)).toStrictEqual([1, 2, 3, 4, 5]);
  expect(removeAfter("not an array", 2)).toBe(undefined);
});

test("replaceLastWithFirst is return result properly", () => {
  expect(replaceLastWithFirst([1, 2, 3, 4, 5])).toStrictEqual([5, 1, 2, 3, 4]);
  expect(replaceLastWithFirst([5, 4, 3, 2, 1])).toStrictEqual([1, 5, 4, 3, 2]);
  expect(replaceLastWithFirst([1])).toStrictEqual([1]);
  expect(replaceLastWithFirst([])).toStrictEqual([]);
});
