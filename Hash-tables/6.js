6) Top K Frequent Elements
Given an array, return the k most frequent elements.


var topKFrequent = function(nums, k) {
    let frequencyMap = new Map();
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    let frequencyArray = Array.from(frequencyMap.entries());

    frequencyArray.sort((a, b) => b[1] - a[1]);

    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(frequencyArray[i][0]); 
    }

    return result;
};
