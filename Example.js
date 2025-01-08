const boilwater=(done)=>{
    console.log('Boiling the Water');

    setTimeout(()=>{
        console.log('Boiling Of Water is Going On .......');
        done();
    },2000)
}


const preparePasta=(done)=>{
    
    console.log('Preparing of pasta is going one');

    setTimeout(()=>{
        console.log('Your PAsta Has been Ready');
        done();
    },3000)
}


const prepareSauce=(done)=>{
    
    console.log('Preparing of Sauce is going one');

    setTimeout(()=>{
        console.log('Your Sauce Has been Ready');
        done();
    },3000)
}


const serveDish=(done)=>{
    
    console.log('Preparing of Serving is going one');

    setTimeout(()=>{
        console.log('Serving of Dish HAs been Done');
        done();
    },3000)
}

boilwater(()=>{
    preparePasta(()=>{
        prepareSauce(()=>{
            serveDish(()=>{

            })
        })
    })
})


