/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let min = 0, max = 0;
    for (let n of nums) {
        max = Math.max(max, min = n === 0 ? 0 : min + 1);
    }
    return max;
};