import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  function  handleClick() {


    //asignment 1 -----------------------------------------------------------------
    fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            return response.json();  //we use json  method to parse the response into a JavaScript object
        }).then(response => {
            console.log(response);
            setData(response.results);
        }).catch(err=>{
            console.log(err);
        });



    //asignment 2 ----------------------------------------------


    axios.get('https://pokeapi.co/api/v2/pokemon').then(response=>{
      
    console.log(response.data);
    return response.data;

    
      })
      .then(response => {
        console.log(response);
        setData (response.results);
        })
      }

  return (
    <>
      <button onClick={handleClick} type="submit">Fetch Pokemon</button>
      <ul>
      {data.map((item,key) => (
        <li key={key}>
          {item.name}
        </li>
      ))}
      </ul>
    </>
  )
}

export default App
