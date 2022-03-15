/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {

    if (arr.length < 3) return false;
    if (arr[1] < arr[0]) return false;

    let maxFound = false;

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i + 1] === arr[i]) return false;

        if (maxFound && arr[i + 1] > arr[i]) return false;

        if (arr[i] > arr[i + 1]) {

            maxFound = true;

        }

    }

    // return maxFound ? true : false
    return maxFound;

};