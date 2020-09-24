"use strict"

const swap = function(array, firstIdex, secondIndex) {
    if (array.length < Math.max(firstIdex, secondIndex)) {
        throw 'Index out of range!';
    }

    // const firstElem = array[firstIdex];
    // array[firstIdex] = array[secondIndex];
    // array[secondIndex] = firstElem;

    [array[secondIndex], array[firstIdex]] = [array[firstIdex], array[secondIndex]];
    
    return array;
};

const indexOfMinimum = function(array, startIndex) {
    // Set initial values for minValue and minIndex,
    // based on the leftmost entry in the subarray:  
    let minIndex = startIndex;

    // Loop over items starting with startIndex,
    // updating minValue and minIndex as needed:
    for (let index = startIndex; index < array.length; index++) {
        if (array[minIndex] > array[index]) {
            minIndex = index;
        }                
    }
  
    return minIndex;
};

/*
  Selection sort
  
  Time Complexity: O(n^2)
  Space Complexity: O(1)

Selection sort is a sorting algorithm, specifically an in-place comparison sort. It has O(n2) time complexity,
making it inefficient on large lists, and generally performs worse than the similar insertion sort.
Selection sort is noted for its simplicity, and it has performance advantages over more complicated algorithms in certain situations,
particularly where auxiliary memory is limited.

*/
var selectionSort = function(array) {
    let sortedArray = [...array];
    for (let i = 0; i < sortedArray.length; i++) {
        sortedArray = swap(sortedArray, indexOfMinimum(sortedArray, i), i);
    }

    return sortedArray;
  	//return array.sort((a, b) => a - b);
};

const array = [4, 2, 1, 3];
console.log(`Original Array: ${array}. Sorted Array: ${selectionSort(array)}`);