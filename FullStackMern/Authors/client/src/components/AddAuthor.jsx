import React, { useState } from 'react'
import axios from 'axios';
import { Link  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default () => {
    const [name, setName] = useState(""); 
    const [errors, setErrors] = useState([]); 
    const navigate = useNavigate();


    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/authors/new', {
            name,
        })
        .then(res=>{console.log(res);
        navigate("/authors");}) // If successful, do something with the response. 
        
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)   
            }
            setErrors(errorArr);
        }) 
        

    }
               
    

    return (
        <>
        <h1></h1>
        <Link to = {'/authors'} >Home</Link>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Author Name</label><br/>
                <input type="text" 
                        onChange={(e)=>setName(e.target.value)} 
                        value={name}
                        aria-describedby="nameHelp"
                        />
                        
                        
            </p>

            <input type="submit"/>
        </form>
        
        </>
    )
}

