import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Details = () => {
    const [patient, setPatient] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/patients/${id}`)
            .then(res => {
                setPatient(res.data.Patient); 
                console.log(res.data.Patient);
            })
            .catch(err => console.error(err));
    }, [id]); 

    const removePatient = (patientId) => {
        axios.delete('http://localhost:8000/api/patients/' + id)
            .then(res => {
                navigate('/Patients');
            })
            .catch(err => console.error(err));
    };

    if (!patient) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Details</h2>
            <p><strong>Name:</strong> {patient.name}</p>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Symptoms:</strong> {patient.symptoms}</p>
            <button onClick={() => removePatient(patient._id)}>Discharge Patient</button>
        </div>
    );
};

export default Details;
