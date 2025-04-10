var solve = function(root, ans){
    if(!root) return;
    solve(root.left, ans);
    solve(root.right, ans);
    ans.push(root.val);
}

var postorderTraversal = function(root) {
    let ans = [];
    solve(root, ans);
    return ans;
};