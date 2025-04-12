var countPaths = function(node, targetSum) {
    if (node === null) return 0;

    let count = 0;
    if (node.val === targetSum) count++;

    count += countPaths(node.left, targetSum - node.val);
    count += countPaths(node.right, targetSum - node.val);

    return count;
}

var pathSum = function(root, targetSum) {
    if (root === null) return 0;

    return (
        countPaths(root, targetSum) +
        pathSum(root.left, targetSum) +
        pathSum(root.right, targetSum)
    );
};