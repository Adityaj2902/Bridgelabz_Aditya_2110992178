

// 2) Symmetric Tree
// Check if a given binary tree is symmetric around its center.



// var isSymmetric = function(root) {
//     let ans = true;

//     function symmetric(left, right) {
//         if (!left && !right) return true;  
//         if (!left || !right) return false; 
        
//         return (left.val === right.val) &&
//                symmetric(left.left, right.right) &&
//                symmetric(left.right, right.left);
//     }

//     if (root) {
//         ans = symmetric(root.left, root.right);
//     } else {
//         ans = true;
//     }

//     return ans;
// };
