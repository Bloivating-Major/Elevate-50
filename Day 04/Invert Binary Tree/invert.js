var solve = function(root){
    if(root === null) return;
    solve(root.left);
    solve(root.right);
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
}

var invertTree = function(root) {
    if(root === null) return null;
    solve(root);
    return root;
};