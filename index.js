/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined || val === null ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function generateTree(root) {
  root.forEach((item, i) => {
    root[i] = new TreeNode(item);
  });
  root.unshift("x");
  for (let i = 1; i < root.length; i++) {
    const pNode = root[i];
    const lNode = root[i * 2];
    const rNode = root[i * 2 + 1];
    pNode.left = lNode;
    pNode.right = rNode;
  }

  return root[1];
}

function isTruth(val) {
  return val !== undefined && val !== null;
}

var maxPathSum = function (root) {
  // 头部填充一位方便计算
  root = ['x'].concat(root);
  // let tree = generateTree(root)
  const dp = new Array(root.length)
    .fill(1)
    .map(() => new Array(root.length).fill(-Infinity));
  let maxCount = -Infinity;
  // 两结点间的最大路径和
  for (let i = 1; i < root.length; i++) {
    const pNode = root[i];
    const lNode = root[i * 2];
    const rNode = root[i * 2 + 1];
    dp[i][i] = pNode
    maxCount = Math.max(maxCount, dp[i][i]);
    if (isTruth(lNode)) {
      // 左边可达
      dp[i][i * 2] = pNode + lNode;
      dp[i * 2][i] = pNode + lNode;
      maxCount = Math.max(maxCount, dp[i][i * 2]);
    }

    if (isTruth(rNode)) {
      // 右边可达
      dp[i][i * 2 + 1] = pNode + rNode;
      dp[i * 2 + 1][i] = pNode + rNode;
      maxCount = Math.max(maxCount, dp[i][i * 2 + 1]);
    }
  }

  // 以root[i]作为中转时的最大路径和
  for (let i = 1; i < root.length; i++) {
    for (let j = 1; j < root.length; j++) {
      if (dp[i][j] !== -Infinity && i !== j) {
        // console.log('-', root[i], root[j])
        // 有路径，找j可达的结点
        for (let k = j + 1; k < root.length; k++) {
          if (dp[j][k] !== -Infinity && i !== k) {
            dp[i][k] = dp[i][j] + root[k];
            // dp[i][k] = root[i] + root[j] + root[k];
            maxCount = Math.max(maxCount, dp[i][k]);
            // console.log("=", root[i], root[j], root[k]);
          }
        }
      }
    }
  }
  // console.log(maxCount);
  return maxCount
};

// dp[i, j] 表示从 i 结点到 j 结点的最大路径和
// 先计算两结点之间的最大路径和，再计算将结点作为中转时的最大路径和

let result = maxPathSum([-2, -1]);
console.log(result);

//      -10 9   20 null null 15   7
// -10  0   -1  10 ifi  ifi  ifi  ifi
// 9    -1
// 20   10  ifi 0            35   27
// null
// null
// 15           35                ifi
// 7            27

// 以结点作为中转

//      -10 9   20 null null 15   7
// -10  0   -1  10 ifi  ifi  ifi  ifi
// 9    -1
// 20   10  ifi 0            35   27
// null
// null
// 15           35                42
// 7            27           42
