const boilwater=()=>{

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            console.log("Boiling of Water is Going ON .....");
            resolve();
        },2000);
    })
}

const preparePasta=(cb)=>{
    
    // console.log('Preparing of pasta is going one');
    return new Promise ((resolve)=>{
    setTimeout(()=>{
        console.log('Your Preparation of Pasta is Going On ....');
        resolve();
    },3000)

})
}


const prepareSauce=(done)=>{
    
    // console.log('Preparing of Sauce is going one');
      return new Promise ((resolve)=>{   
    setTimeout(()=>{
        console.log('Your Preparation of Sauce is going on ......');
        resolve();
    },3000)

})
}
const prepareingpasta=()=>{
    return new Promise((resolve)=>{
        // console.log('Your pasta Is going on ');
        setTimeout(()=>{
            console.log(" Your Pasta PreParation iS Going on ....")
        })
        resolve();
    })
}


const serveDish=(done)=>{
    
    // console.log('Preparing of Serving is going one');
    return new Promise ((resolve)=>{

    setTimeout(()=>{
        console.log('Serving of Dish is Going on');
        resolve();
    },3000)
})
}


const finalresult=()=>{
    boilwater().then(()=>{
        console.log('Boiling Of water Is Done');
        return preparePasta();
    })
    .then(()=>{
        console.log("Preparing of Pasta Is Done")
        return prepareSauce();
    })
    .then(()=>{
        console.log("Preparing of Sauce is Done");
        return serveDish();
    })
    .then(()=>{
        console.log("Serving of Dish is Done");
    })
    .catch(()=>{
         console.log('Pasta Work is Finalluy DOne');
    })
}

finalresult();













// const aasyncPromuse=()=>{
//     boilwater()
//     .then(()=>{
//       console.log("Your pasta is going on ");
//       return pre
//     })
//   }

// const cookingPromise=()=>{
//     boilwater()
//     .then(()=>{
//         console.log("Boiling Of Water is Done");
//         return preparePasta();
//     }).then(()=>{
//         console.log("Preparing Of pasta is Done ");
//         return prepareSauce();
//     }).then(()=>{
//         console.log("Preparing of the Sauce is Done");
//     }).then(()=>{
//         console.log("Serving of the Dishes is Done ");
//     }).catch(()=>{
//         console.error("Some Error is Going on");
//     })
// }

// cookingPromise();

// // const aasyncPromise = async () => {
// //     console.log("Boiling of water Is going on");
// //     await boilwater();
    
// //     console.log("Preparing of Pasta is going on ");
// //     await preparePasta(); // Fixed the function to match the correct order
    
// //     console.log("Preparing of Sauce is going on ");
// //     await prepareSauce();
    
// //     console.log("Serving of Dish is going on ");
// //     await serveDish();
// // };

// // aasyncPromise();



// const aasyncPromise=async()=>{

//     console.log()
// }


// const aasyncpromuse=()={
//   boilwater().
//   then(()=>{
//     console.log("Your pasta is going on ");
//     return pre
//   })
// }