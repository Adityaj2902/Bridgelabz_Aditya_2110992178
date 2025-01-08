// const takedata=(cb)=>{
//     console.log('Taking Data');
//     setTimeout(()=>{
//         console.log("You Data HAs been Take SuccessFully");
//         cb();
//     },2000);
// }

// const processData=(cb)=>{
//     console.log('Process Data');

//     setTimeout(()=>{
//         console.log('You data has beeenm Processed Successfully');
//     })
// }


// takedata(()=>{
//     console.log("Taking");
//     processData(()=>{
//         console.log('Data Has been Processed Successfully');
//     })
// })

// Call Back hell Example

const takedata=(cb)=>{
    return new Promise((resolve)=>{
    setTimeout(()=>{
        console.log("You Data HAs been Take SuccessFully");
        cb();
    },2000);
});
}
