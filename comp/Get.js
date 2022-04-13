import { useEffect, useState } from "react";
import React from 'react';
import axios from "axios";


export default function Get() {
    const[dataf,setData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            setData(res.data)
            console.log(res.data);
        })
    },[])
  return(
<div>
    <ul>
    {dataf.map((e)=><li key={e.id}>{e.name}</li>)}
    </ul>
    
</div>
  ) 
}
