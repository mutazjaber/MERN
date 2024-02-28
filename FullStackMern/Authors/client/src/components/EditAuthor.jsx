import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState , useEffect   } from 'react'
import axios from 'axios';
// import AddAuthor from './AddAuthor';


const EditAuthor = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    // const [idError, setIdErr] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/author/' + id)
            .then(response => {
                setName(response.data.name);
            })
            .catch(err => {
                setIdErr(true);
            });
    }, [id]);

    const updateAuthor = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/author/' + id , {
            name,
        })
        .then(response=>{
            console.log(response);
            navigate("/authors");
        }) 
        
        
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)   
                }
                setErrors(errorArr);
            }) 

            axios.get(`http://localhost:8000/author/${id}`)
            .then(response => {
                console.log(response.data.name);
                setName(response.data.name);
            })
            .catch(err => console.error(err));
    
    }
    
  return (
    <div>
        <div>
            <h1>Update a Authors</h1>
            {/* <form onSubmit={updateAuthor}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>New Name :</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>

                <input type="submit" />
            </form> */}

            {/* reusing component */}
            {idError ?
                <>
                    <h1> Error 404 page not found</h1 >
                    <Link to={`/authors`}><button type="button" className="btn btn-lg btn-primary mt-5" >Return Home</button></Link>
                </>
                :
                <>
                    <h2>Update Author</h2>
                        
                </>
            }

        </div>
      
    </div>
  )
}

export default EditAuthor
