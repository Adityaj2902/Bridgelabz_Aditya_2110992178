

// // 4) Rotate an Array
// // Given an array and a number k, rotate the array to the right by k steps.


// function rotateArray(arr, k) {
//     const n = arr.length;

//     // Normalize k to avoid unnecessary rotations
//     k = k % n;

//     // Helper function to reverse a portion of the array
//     function reverse(start, end) {
//         while (start < end) {
//             [arr[start], arr[end]] = [arr[end], arr[start]];  // Swap elements
//             start++;
//             end--;
//         }
//     }

//     // Step 1: Reverse the entire array
//     reverse(0, n - 1);

//     // Step 2: Reverse the first k elements
//     reverse(0, k - 1);

//     // Step 3: Reverse the remaining n - k elements
//     reverse(k, n - 1);

//     return arr;
// }

// // Example usage:
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;
// console.log("Array after rotation:", rotateArray(arr, k));
// // Output: [5, 6, 7, 1, 2, 3, 4]



// Seconf Way of Solving


function rotateArray(arr, k) {
    const n = arr.length;

    // Step 1: Normalize k to avoid unnecessary rotations
    k = k % n;

    // Step 2: Create a new array to store the rotated elements
    let rotatedArr = new Array(n);

    // Step 3: Fill the rotated array by calculating new positions
    for (let i = 0; i < n; i++) {
        // Calculate the new index after rotation
        let newIndex = (i + k) % n;
        rotatedArr[newIndex] = arr[i];
    }

    // Step 4: Copy the rotated array back to the original array
    for (let i = 0; i < n; i++) {
        arr[i] = rotatedArr[i];
    }

    return arr;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log("Array after rotation:", rotateArray(arr, k));
// Output: [5, 6, 7, 1, 2, 3, 4]
