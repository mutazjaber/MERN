import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import  axios from "axios";



const DisplayProducts = (props) => {
    const remove = (index) => {
        props.delete(index);
    };

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then((res)=>{
                console.log("Deleted");
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <ul>
            {props.products.map( (product, i) =>
                <li key={i}>
                <p ><Link to = {'/product/'+ product._id} >{product.title}</Link> </p>
                <button  onClick={(e)=>{deleteProduct(product._id)}}>
                    Delete
                </button>
                </li>
                
            )}
             </ul>
        </div>
    );
};

export default  DisplayProducts;