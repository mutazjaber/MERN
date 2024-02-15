import './App.css';
import React from "react";
import {  Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import Number from "./components/Number";
import Word from "./components/Word";



function App() {
  return (

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:input" element={<Number/>} />
        <Route path="/:words/:color/:BGcolor" element={<Word/>} />

      </Routes>

  );
}

export default App;