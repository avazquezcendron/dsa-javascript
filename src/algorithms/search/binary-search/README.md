# Binary Search

In computer science, binary search, also known as half-interval 
search, logarithmic search, or binary chop, is a search algorithm 
that finds the position of a target value within a sorted 
array. Binary search compares the target value to the middle 
element of the array; if they are unequal, the half in which 
the target cannot lie is eliminated and the search continues 
on the remaining half until it is successful. If the search 
ends with the remaining half being empty, the target is not 
in the array.

![Binary Search](https://upload.wikimedia.org/wikipedia/commons/8/83/Binary_Search_Depiction.svg)

## Pseudocode

- Let **min = 0** and **max=n−1**.
- If **max<min**, then stop; target is not present in array. Return **-1**.
- Compute **guess** as the average of **max** and **min**, rounded down so that it is an integer.
- If **array[guess]** equals **target**, then stop. You found it! Return **guess**.
- If the **guess** was too low, that is, **array[guess] < target**, then set **min = guess + 1**.
- Otherwise, the **guess** was too high. Set **max = guess - 1**.
- Go back to step two.

## Complexity

**Time Complexity**: `O(log(n))` - since we split search area by two for every
next iteration.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)
- [YouTube](https://www.youtube.com/watch?v=P3YID7liBug&index=29&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)