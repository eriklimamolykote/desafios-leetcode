/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squaredNumbers = nums.map(function(a) {
        return a * a;
    }).sort(function(a, b) {
        return a - b;
    });
    return squaredNumbers
};