import React, { useState } from "react";
import './Jokegenerator.css';
const Jokegenerator=()=>{
    const [Jokes,setJokes]=useState("")
    return(
        <>
        <div className='Jokeapp'>
            <h1>
                Random Jokes Generator!
            </h1>
            <p>
                Random Jokes Generator!
            </p>
            <button>Generator New Jokes</button>
        </div>
        </>
    )
}

export default Jokegenerator;