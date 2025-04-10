var levelOrder = function(root) {
    let ans = [];

    if(root === null) return ans;

    let queue = [root];

    while(queue.length !== 0){
        let cur = [];
        let size = queue.length;

        for(let i = 1; i <= size; i++){
            let node = queue.shift();
            cur.push(node.val);
            if(node.left !== null) queue.push(node.left);
            if(node.right !== null) queue.push(node.right);
        }
        ans.push(cur);
    }

    return ans;
};