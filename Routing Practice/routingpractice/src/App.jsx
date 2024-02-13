import './App.css';
import React from "react";
import { Link, Route, Routes, useParams } from 'react-router-dom'
import Home from "./components/home";
import Number from "./components/number";
import Word from "./components/word";



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