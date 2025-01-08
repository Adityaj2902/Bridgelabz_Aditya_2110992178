// 1)Find the Largest Sum Contiguous Subarray
// Given an integer array, find the contiguous subarray that has the largest sum and return that sum.

function maxSubArraySum(arr) {
    if (arr.length === 0) return 0;

    // Initialize current_sum and max_sum with the first element of the array
    let current_sum = arr[0];
    let max_sum = arr[0];

    // Start iterating from the second element
    for (let i = 1; i < arr.length; i++) {
        current_sum = Math.max(arr[i], current_sum + arr[i]);  // Choose the max between starting fresh or continuing the subarray
        max_sum = Math.max(max_sum, current_sum);  // Update the overall max_sum
    }

    return max_sum;
}

// Example usage:
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Largest sum contiguous subarray:", maxSubArraySum(arr));  // Output: 6
