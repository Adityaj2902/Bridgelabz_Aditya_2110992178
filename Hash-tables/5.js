// 5) Subarray Sum Equals K
// Given an array and a target sum k, find the number of subarrays that sum up to k.


var subarraySum = function(nums, k) {
    let map = new Map();
    map.set(0, 1);  
    let currentSum = 0;
    let count = 0;

    for (let num of nums) {
        currentSum += num; 
        
        if (map.has(currentSum - k)) {
            count += map.get(currentSum - k);
        }

        map.set(currentSum, (map.get(currentSum) || 0) + 1);
    }

    return count;
};
