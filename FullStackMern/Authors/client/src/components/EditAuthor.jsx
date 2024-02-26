import React from 'react'
import { useParams,useNavigate } from "react-router-dom";
import { useState , useEffect   } from 'react'
import axios from 'axios';

const EditAuthor = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/author/' + id)
            .then(res => {
                setName(res.data.name);
            })
    }, [id]);

    const updateAuthor = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/author/' + id , {
            name,
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
            navigate("/authors"); 
    }
    
  return (
    <div>
        <div>
            <h1>Update a Authors</h1>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Authors Name :</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>


                <input type="submit" />
            </form>
        </div>
      
    </div>
  )
}

export default EditAuthor
