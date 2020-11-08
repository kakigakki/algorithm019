/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len = digits.length - 1
    digits[len]++
        //倒序便利
        for (i = len; i >= 1; i--) {
            if (digits[i] === 10) {
                digits[i] = 0
                digits[i - 1]++
            } else {
                return digits
            }
        }
        //如果最大位是10，则扩容
    if (digits[0] === 10) {
        digits[0] = 0
        digits.unshift(1)
    }
    return digits
};
// @lc code=end