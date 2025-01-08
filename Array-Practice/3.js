// 3) Find Duplicate Elements
// Given an array of integers, find the elements that appear more than once.


function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            // If the element is already in the set, it's a duplicate
            duplicates.push(arr[i]);
        } else {
            // Otherwise, add the element to the set
            seen.add(arr[i]);
        }
    }

    return duplicates;
}

// Example usage:
const arr = [4, 3, 2, 7, 8, 2, 3, 1];
console.log("Duplicate elements:", findDuplicates(arr)); 
// Output: [2, 3]
