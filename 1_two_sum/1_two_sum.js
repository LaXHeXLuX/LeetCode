/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let complements = {}

    for (let i = 0; i < nums.length; i++) {
        complement = complements[nums[i]]

        if (complement != null) {
            return [complement, i]
        }

        complements[target - nums[i]] = i
    }
};