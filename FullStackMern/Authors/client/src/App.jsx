
import React from 'react'

import './App.css'
import Main from './views/Main'
import { Routes, Route } from "react-router-dom";
import AddAuthor from './components/AddAuthor';
import EditAuthor from './components/EditAuthor';
function App() {
  
  return (
    <>
    <Routes>
          <Route element={<Main />} path="/authors" />
          <Route element={<AddAuthor />} path="/authors/new" />
          <Route element={<EditAuthor />} path="/author/:id/edit" />
    </Routes>
      
    </>
  )
}

export default App
