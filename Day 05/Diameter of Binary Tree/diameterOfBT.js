var diameterOfBinaryTree = function (root) {
    let ans = 0;

    var solve = function (node) { // It's good practice to use 'node' here to differentiate from the outer 'root'
        if (node === null) return 0;
        let leftHeight = solve(node.left);  // Correct recursive call to solve
        let rightHeight = solve(node.right); // Correct recursive call to solve
        ans = Math.max(ans, leftHeight + rightHeight);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    solve(root);
    return ans;
};