// this method is added in es2023 

// this is doing the same thing as a find method but it starts searching from last to first element or reverse iteration

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const lastWithdrawal=movements.findLast((mov)=>mov<0);

console.log(lastWithdrawal);