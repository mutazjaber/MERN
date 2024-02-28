
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardContent, Button, Typography } from '@mui/material';

const PatientList = (props) => {
  const [patients, setPatients] = useState([]); 
  const [loaded, setLoaded] = useState(false);
  const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [symptoms, setSymptoms] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/patients')
      .then(response => {
        setPatients(response.data.Patients);
        setLoaded(true);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
         <div style={{ backgroundColor: 'gray', padding: '20px' }}>
                <Link to="/patients" style={{ margin: '50px' }}>
                    <button>Home</button>
                </Link>
                <h2 style={{ display: 'inline-block' }}>Hospital Manager !!@</h2>
                <Link to="/" style={{ margin: '50px' }}> <button style={{ margin: '20px' }} type="submit">Admit</button></Link>
            </div>
      <h2>All Patients</h2>
      {!loaded ? <p>Loading...</p> : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {patients.map((patient, index) => (
            <Card key={index} style={{ margin: '10px', minWidth: '300px' }}>
              <CardContent>
                <Typography variant="h5" component="h2">


                <Link to= {"/patient/"  + patient._id  +" /detail"}> 


                <span>{patient.name}</span></Link>
                </Typography>
                <Button component={Link} to={'/patient/' + patient._id + '/edit'}  
                variant="contained" color="primary">
                  Edit
                </Button>
                <Typography >
                  {patient.age}
                </Typography>
                <Typography variant="body2" component="p">
                   {patient.symptoms}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default PatientList;

