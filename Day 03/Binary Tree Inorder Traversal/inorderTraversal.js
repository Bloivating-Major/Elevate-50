var solve = function(root, ans){
    if(root === null) return;
    solve(root.left, ans);
    ans.push(root.val);
    solve(root.right, ans);
}

var inorderTraversal = function(root) {
    let ans = [];
    solve(root, ans);
    return ans;
};