"use strict"


let binarySearchRec = function(a, key, low, high) {
  if (low > high) {
    return -1;
  }
  
  let mid = low + Math.floor((high - low) / 2);
  if (a[mid] === key) {
    return mid;
  } else if (key < a[mid]) {
    return binarySearchRec(a, key, low, (mid - 1));
  } else {
    return binarySearchRec(a, key, (mid + 1), high);
  }
};

/*
  Binary Search Recursive
  
  Time Complexity: O(log n)
  Space Complexity: O(log n)

  The recursive solution has O(log n) memory
  complexity as it will consume memory on the stack.
*/
let binarySearchRecursive = function(a, key) {
  return binarySearchRec(a, key, 0, (a.length - 1));
};

/*
  Binary Search Iterative
  
  Time Complexity: O(log n)
  Space Complexity: O(1)

  The iterative solution has the same O(log n)
  runtime complexity as the recursive solution but has a better memory complexity.
*/
let binarySearch = function(array, elem) {
    let mid;
    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
        mid = min + Math.floor((max - min) / 2);
        if (array[mid] === elem)
            return mid;
        
        if (array[mid] < elem) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
    return -1;
}

const elem = 3;
const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
console.log(`The index of ${elem} in the array is: ${binarySearch(array, elem)}`);