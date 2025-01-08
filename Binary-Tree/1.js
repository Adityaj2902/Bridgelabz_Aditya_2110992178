1) Binary Tree Inorder Traversal
Given a binary tree, return the inorder traversal of its nodes' values.



// var inorderTraversal = function(root) {
//     let result=[];

//     function inorder(node){
//         if(node == null){
//             return;
//         }
//         inorder(node.left);
//         result.push(node.val);
//         inorder(node.right);
//     }

//     inorder(root);

//     return result;
// };


// Definition for a binary tree node.

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// function inorderTraversal(root) {
//     let result = [];
//     function traverse(node) {
//         if (!node) return;
//         traverse(node.left);   // Visit left subtree
//         result.push(node.val); // Visit node
//         traverse(node.right);  // Visit right subtree
//     }
//     traverse(root);
//     return result;
// }

// // Example usage:
// let root = new TreeNode(1);
// root.right = new TreeNode(2);
// root.right.left = new TreeNode(3);

// console.log(inorderTraversal(root)); // Output: [1, 3, 2]
