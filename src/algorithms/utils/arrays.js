export default class ArrayUtils { 
    
    /**
     *  Swap the elements of the given array, as per the specified indices
     * @param {*} array
     * @param {number} firstIdex
     * @param {number} secondIndex
     * @return {void}
     */
    swap(array, firstIdex, secondIndex) {
        if (array.length < Math.max(firstIdex, secondIndex)) {
            throw 'Index out of range!';
        }

        const firstElem = array[firstIdex];
        array[firstIdex] = array[secondIndex];
        array[secondIndex] = firstElem;
        
        return array;
    };

    indexOfMinimum(array, startIndex) {
        // Set initial values for minValue and minIndex,
        // based on the leftmost entry in the subarray:  
        let minValue = array[startIndex];
        let minIndex = startIndex;

        // Loop over items starting with startIndex,
        // updating minValue and minIndex as needed:
        for (let index = startIndex; index < array.length; index++) {
            if (minValue > array[index]) {
                minIndex = index;
                minValue = array[index];
            }                
        }
      
        return minIndex;
    };
}
