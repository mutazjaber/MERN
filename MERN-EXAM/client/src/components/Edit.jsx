import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Edit = (props) => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/patients/' + id)
            .then(response => {
                const { name, age, symptoms } = response.data.Patient;
                setName(name);
                setAge(age);
                setSymptoms(symptoms);
            })
            .catch(err => {
                console.error(err);
                setErrors(["Patient not found"]);
            });
    }, [id  ]);

    const editPatient = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/patients/' + id, {
            name,
            age,
            symptoms
        })
            .then(response => {
                console.log(response);
                navigate("/patients");
            })
            .catch(err => console.error(err));
            navigate("/patients");


       
    }

    return (
        <>
            <div>
                <div style={{ backgroundColor: 'gray', padding: '20px' }}>
                    <Link to="/patients" style={{ margin: '50px' }}>
                        <button>Home</button>
                    </Link>
                    <h2 style={{ display: 'inline-block' }}>Hospital Manager !!@</h2>
                    <Link to="/" style={{ margin: '50px' }}> <button style={{ margin: '20px' }} type="submit">Admit</button></Link>
                </div>
                <div>
                    <form onSubmit={editPatient}>
                        <div style={{ margin: '20px' }}>
                            <label>Name:</label>
                            <input type="text"
                            name='name'
                                // placeholder={patients.name}
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div style={{ margin: '15px' }}>
                            <label>Age:</label>
                            <input type="number"
                            name='age'
                                value={age}
                                onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div style={{ margin: '10px' }}>
                            <label>Symptoms:</label>
                            <input type="text" 
                            value={symptoms}
                            name='symptoms' 
                            onChange={(e) => setSymptoms(e.target.value)} />
                        </div>
                        <button style={{ margin: '20px' }} type="submit">Update</button>
                    </form>

                    <ul>
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Edit;
