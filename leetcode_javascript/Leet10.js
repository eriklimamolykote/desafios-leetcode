/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {

    let evenNumbersArray = nums.filter(itm => ((itm%2) == 0));
    let oldArray = nums.filter(itm => ((itm%2) != 0));
    let newArray = [...evenNumbersArray, ...oldArray];

    return newArray;
    
};