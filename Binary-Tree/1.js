1) Binary Tree Inorder Traversal
Given a binary tree, return the inorder traversal of its nodes' values.



var inorderTraversal = function(root) {
    let result=[];

    function inorder(node){
        if(node == null){
            return;
        }
        inorder(node.left);
        result.push(node.val);
        inorder(node.right);
    }

    inorder(root);

    return result;
};