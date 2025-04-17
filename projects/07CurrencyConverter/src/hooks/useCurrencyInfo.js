// here we are going to create our own custom hook

/*
// this is also a custom hook but this is not what we are going to create
    function hello(){
        return [a,b()]
    }

*/

// custom hook can also use inbuilt hooks 

import { useEffect, useState } from "react"

function useCurrencyInfo(currency){
    // this custom hook will return some data but which data, we will see ahead
    // now we are going to call API which can be done using fetch function but i want that when someone uses my custom hook then and only then the API must be called 
    // whenever our component gets mounted or its lifeCycleEvent gets triggered then we have a hook namd useEffect
    // in this hook my API will get fetched/called automatically and i dont have to make/create another function for calling the API
    // useEffect hook wants and callback function as well as an dependencies array that will include the variable or something upon which if anything happens that changes the variable or something then the function/hook must be re run / recalled or here my API gets called again
    
    const [data, setData] = useState({}) // passing the empty object so that our project doesn't crashing if nothing appears in place of data

    useEffect(() => {
        // we will be doing the chaining with fetch function
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json()) // converting the string into json format
        .then((res) => setData(res[currency]))// here you can also use dot operator to get the currency of your request in response and 
    }, [currency])
    console.log(data)
    return data
}

export default useCurrencyInfo; // because of this line now i can use the data set by the above hook based on users request

// what i did is I designed the hook in such a way that i returned the whole useCurrencyInfo functionality and if you concentrate on useState hook there also whole method is getting returned.


// this was all about designing the custom hook 