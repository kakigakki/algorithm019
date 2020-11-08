/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let ht = {}
    for (i = 0; i < nums.length; i++) {
        if (ht[target - nums[i]] !== undefined) {
            return [ht[target - nums[i]], i]
        } else {
            ht[nums[i]] = i
        }
    }
};
// @lc code=end