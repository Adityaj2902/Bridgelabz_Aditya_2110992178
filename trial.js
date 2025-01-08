const getCountryData=(countryname)=>{
    fetch(`https://restcountries.com/v2/name/${countryname}`)
    .then(response=>{

        console.log(response);
        
        if(!response.ok){
            throw new Error (`Country Not Found (${response.status})`);
        }
        return response.json();

    }


    const countryData=((countryname)=>{
        fetch('')
        .then((response,err)=>{
            console.log(response);
            console.error(err.message);
        })

        return repsone.JSON();
    })