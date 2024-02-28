
import { Route, Routes } from 'react-router-dom'
import './App.css'
import React, { useState } from 'react';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import Details from './components/Details';
import Edit from './components/Edit';


function App() {
  const [patients, setPatients] = useState([]);

  const addPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  return (
    <>
    <div>
    
      <Routes>
        <Route element={<PatientForm addPatient={addPatient} />} path="/" />
        <Route element={<PatientList patients={patients} />} path="/patients" />
        <Route element={<Edit patients={patients} />} path="/patient/:id/edit" />
        <Route element={<Details patients={patients} />} path="/patient/:id/detail" />

      </Routes>
    </div>
    </>
  );
}

export default App;
