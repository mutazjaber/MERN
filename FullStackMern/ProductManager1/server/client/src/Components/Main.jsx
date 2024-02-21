import React, { useEffect, useState } from 'react'
import Produc from './Produc';
import axios from 'axios';
import DisplayProducts from './DisplayProducts';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[products]);
    
    return (
        <>
        <div>
           <Produc/>
           <hr/>
           {loaded && <DisplayProducts products={products}/>}
        </div>
        </>
    )
}
    
export default Main;