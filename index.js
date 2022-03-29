/**
 * @param {string} s
 * @return {number}
 */

// 一次遍历中记录偷第i家时的最大利润和不偷第i家时的最大利润
// 偷第i家的最大利润等于不偷上一家时的利润加上nums[i]的值
// 不偷第i家的最大利润等于偷上一家的利润与不偷上一家利润的最大值
// iTCountList[i] = iBTCountList[i - 1] + nums[i]
// iBTCountList[i] = Math.max(iTCountList[i - 1], iBTCountList[i - 1]);

var rob = function (nums) {
  let iTCountList = [nums[0]]; // 偷第i位时的最大金额
  let iBTCountList = [0]; // 不偷第i位时的最大金额
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    iTCountList[i] = iBTCountList[i - 1] + num;
    iBTCountList[i] = Math.max(iTCountList[i - 1], iBTCountList[i - 1]);
  }
  return Math.max(iTCountList[nums.length - 1], iBTCountList[nums.length - 1]);
};
let result = rob([1, 2, 3, 1]);

//      2 1 1 2
// t:   2 1 3 4
// bt:  0 2 2 3
console.log(result);
