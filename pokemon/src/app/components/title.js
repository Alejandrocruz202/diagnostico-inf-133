'use client'
import { useState , useEffect } from "react";

function Title(){
    const [name,setName]=useState('cargando');
    const url="https://pokeapi.co/api/v2/pokemon/20";
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{setName(data.species.name)})
    },[]);
    return(
        <div className='main'>
            <h1>my pokemon</h1>
            <p>{name}</p>
        </div>   
    )
}
export default Title;