/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    // Length of the updated array
    let arrayLength = 0;

    // Loop for all the elements in the array
    for (let index = 0; index < nums.length; index++) {

        // Skip if the current element is equal to the next one
        if (nums.length - 1 && nums[index] == nums[index + 1]) {

            continue;

        }

        // Update
        nums[arrayLength] = nums[index];
        arrayLength++;

    }

    return arrayLength;

}