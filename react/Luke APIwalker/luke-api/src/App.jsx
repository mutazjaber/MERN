import { useState } from 'react'
import React from 'react'

import './App.css'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import Search from './assets/components/Search'
import Display from './assets/components/Display'
import { useEffect } from 'react'
import axios from 'axios'


function App() {
  const [idx, setIdx] = useState();
  const [category, setCategory] = useState();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/").then((response) => {
      setCategories(Object.keys(response.data));
    });
  }, []);

  const passValues = (category, idx) => {
    setIdx(idx);
    setCategory(category);
  }



  return (
    <>
      <Search categories={categories} category={category} onSupmit={passValues}></Search>

      <Routes>
        <Route path="/:category/:idx" element={<Display />} />
      </Routes>

    </>
  )
}

export default App
