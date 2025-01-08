// 2) Move Zeroes
// Given an array, move all zeros to the end of the array while maintaining the relative order of the non-zero elements.


function movesZero(nums){

    let nonZeroIndex=0;

    for(let i=0;i<nums.length;i++){

        if(nums[i]!==0){
            nums[nonZeroIndex]=nums[i];
            nonZeroIndex++;
        }

    }

    for(let i=nonZeroIndex;i<nums.length;i++){
        nums[i]=0;
    }

    return nums;
}

let arr =[0,1,0,3,12];

movesZero(arr);

console.log(arr);
