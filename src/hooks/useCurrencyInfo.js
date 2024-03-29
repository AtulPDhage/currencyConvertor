import React from 'react'
import { useState, useEffect } from 'react'

const useCurrencyInfo = (currency) => {

     const [data, setData] = useState({})

     //when we want conditional execution of code then we use useEffect

     useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=> setData(res[currency]))
     },[currency])
     
     
     return data;
}

export default useCurrencyInfo
