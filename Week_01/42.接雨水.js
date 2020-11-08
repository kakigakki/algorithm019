/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
//单调递减栈
var trap = function(height) {
    let res = 0
    let stack = []
    for (let i = 0; i < height.length; i++) {
        while (height[i] > height[stack[stack.length - 1]]) {
            let stackTopIndex = stack.pop()
            if (stack.length === 0) {
                break
            }
            let nowStackTopIndex = stack[stack.length - 1]
                //雨水面积= （当前栈顶元素高度与待入栈元素的高度的较小值-弹出栈的元素高度）* 索引
            res += (Math.min(height[nowStackTopIndex], height[i]) - height[stackTopIndex]) * (i - nowStackTopIndex - 1)
        }
        stack.push(i)
    }
    return res
};
// @lc code=end