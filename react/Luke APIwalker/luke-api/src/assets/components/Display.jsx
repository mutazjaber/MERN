import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams, useNavigate } from 'react-router-dom'

const Display = (props) => {
    const { category, idx } = useParams();
    const navigate = useNavigate();
    const [result, setResult] = useState();
    const [err, setErr] = useState('');

    useEffect(() => {
        axios
            .get('https://swapi.dev/api/' + category + "/" + idx)
            .then((response) => {
                setResult(response.data);
                console.log(result);
            })
            .catch(error => {
                console.log(error);
                setErr("not Found");
            });
        setErr("")
    }, [navigate]);
    return (
        <>
            {err != "" ? <h2>{err}</h2> :

                <div>
                    {result && Object.entries(result).map(([key, value]) => (
                        <div key={key}>
                            <strong>{key}: </strong>
                            {value}
                        </div>

                    ))}
                </div>
            }
        </>
    )
}
export default Display