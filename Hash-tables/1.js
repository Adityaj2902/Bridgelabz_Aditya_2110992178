
//Question 1

1) Two Sum  (Done)
Given an array of integers and a target, return the indices of the two numbers that add up to the target.



var twoSum = function(nums, target) {
    let map=new Map();

    for(let i =0;i<nums.length;i++){

        let complement=target-nums[i];

        if(map.has(complement)){
            return [map.get(complement),i];
        }

       map.set(nums[i],i);
    }


};