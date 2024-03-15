/**
 * For illustration, we have an list [1, 2, 3, 4, 5] and we need to remove all the elements that go after 3 - which is 4 and 5.

We have two edge cases here: (1) if a cutting element cannot be found, then the list shouldn't be changed; (2) if the list is empty, then it should remain empty.

Input: List and the border element.

Output: Iterable (list).

Example:

removeAfter([1, 2, 3, 4, 5], 3) == [1, 2, 3]
removeAfter([1, 1, 2, 2, 3, 3], 2) == [1, 1, 2]


 */

function removeAfter(arr, border) {
  // your answer here!
}

module.exports = removeAfter;
