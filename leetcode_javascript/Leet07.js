/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {

    let length = arr.length;

    let max = -1;

    for (let i = length - 1; i >= 0; i--) {

        let temp = arr[i];

        arr[i] = max;

        max = Math.max(temp, max);

    }

    return arr;
    
};