import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

function PatientForm({ addPatient }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const navigate = useNavigate();
    // const [errors, setErrors] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/patients', {
            name, age, symptoms
        })
            .then(res => {
                console.log(res);
                navigate('/patients');
                addPatient(res.data);
            })
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                }
                setErrors(errorArr);
            })



        setName("");
        setAge("");
        setSymptoms('');
    }

    return (
        <>
            <div style={{ backgroundColor: 'gray', padding: '20px' }}>
                <Link to="/patients" style={{ margin: '50px' }}>
                    <button>Home</button>
                </Link>
                <h1 style={{ display: 'inline' }}>Admit Patient</h1>

            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div style={{ margin: '20px' }}>
                        <label>Name:</label>
                        <input type="text" 
                        value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div style={{ margin: '15px' }}>
                        <label>Age:</label>
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
                    </div>
                    <div style={{ margin: '10px' }}>
                        <label>Symptoms:</label>
                        <input type="text" value={symptoms} onChange={(e) => setSymptoms(e.target.value)} required />
                    </div>
                    <button style={{ margin: '20px' }} type="submit">Admit</button>
                </form>
            </div>
        </>
    );
}

export default PatientForm;
