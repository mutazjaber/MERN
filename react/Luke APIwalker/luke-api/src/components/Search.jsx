import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams, useNavigate } from 'react-router-dom'

const Search = (props) => {
    const [result, setResult] = useState();
    const { categories } = props;
    const [idx, setIdx] = useState();
    const [category, setCategory] = useState();
    const navigate = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault();
        call();

        idx && category ?
            navigate("/" + category + "/" + idx) : ""
    }
    const call = () => {
        axios.get('https://swapi.dev/api/' + category + "/" + idx)
            .then((response) => {
                setResult(response.data);
                console.log(result);
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search For: </label>
                <select id="search" value={category} onChange={e => setCategory(e.target.value)}>
                    {categories.map((cat, idx) =>
                        <option key={idx} value={cat}>{cat}</option>
                    )}
                </select >

                <label htmlFor="ID">ID: </label>
                <input type="number" name="" id="ID" onChange={(e) => setIdx(e.target.value)} />
                <input type="submit" value="Search" />
            </form>



        </>
    )
}
export default Search