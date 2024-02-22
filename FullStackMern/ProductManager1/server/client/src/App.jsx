// import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./views/Main";
import Detail from "./Components/Detail";
import Update from "./Components/Update";

function App() {
  // const [products, setProducts] = useState([]);

  return (
    <>
      <div className="App">

        <Routes>
          <Route element={<Main />} path="/products" />
          <Route element={<Detail />} path="/product/:id" />
          <Route element={<Update />} path="/product/:id/edit" />
        </Routes>

      </div>
    </>
  );
}

export default App;
