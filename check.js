function SumNumber(numbers){

let sum=0;
    if(sum>=100){
        return sum;
    }

     sum+= SumNumber(numbers + 2);

}

let ans=SumNumber(56);

console.log(ans);