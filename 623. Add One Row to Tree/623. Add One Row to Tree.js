var addOneRow = function(root, val, depth) {
    function dfs(node, level){
        if(node===null) return
        if(level===depth-1){
            node.left = new TreeNode(val, node.left, null);
            node.right = new TreeNode(val, null, node.right);
            return ;
        };

        dfs(node.left, level+1);
        dfs(node.right, level+1)

    };

    if(depth ===1){
        let newRoot = new TreeNode(val, root);
        return newRoot;
    }
    dfs(root, 1);
    return root;
};