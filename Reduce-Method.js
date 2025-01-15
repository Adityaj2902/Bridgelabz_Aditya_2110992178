var SumOfArray = [2, 3, 4, 5, 7, 8, 9];
var Sum = SumOfArray.reduce(function (accu, curr) { return accu + accu; });
console.log(Sum);
