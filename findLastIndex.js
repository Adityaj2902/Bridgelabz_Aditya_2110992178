// this feature added in es 2023

// this is as same as  findIndex Method it just start iteration from the very last element of the array 

  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  const lastLargeMovements=movements.findLastIndex((mov)=>Math.abs(mov>0));

  console.log(`Your Latest Large Movement was ${lastLargeMovements} moments ago`);