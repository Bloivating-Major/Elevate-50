var solve = function(root, ans){
    if(root === null) return;
    ans.push(root.val);
    solve(root.left, ans);
    solve(root.right, ans);
}

var preorderTraversal = function(root) {
    let ans = [];
    solve(root, ans);
    return ans;
};