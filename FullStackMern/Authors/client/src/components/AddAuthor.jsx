import React, { useState } from 'react'
import axios from 'axios';
import { Link  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default () => {
    const [name, setName] = useState(""); 
    const navigate = useNavigate();


    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/authors/new', {
            name,
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
            navigate("/authors");
    }
    

    return (
        <>
        <h1></h1>
        <Link to = {'/authors'} >Home</Link>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Author Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>

            <input type="submit"/>
        </form>
        </>
    )
}

