var hasPathSum = function(root, targetSum) {
    if(root === null) return false;
    if(root.left === null && root.right === null && root.val === targetSum) return true;
    return hasPathSum(root.left, targetSum-root.val) || hasPathSum(root.right, targetSum - root.val);
};