import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setDesc(res.data.desc);
                setPrice(res.data.price);

            })
    }, [id]);

    const updateProduct = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/products/' + id, {
            title,
            desc,
            price,
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Product Title :</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Product Price :</label><br />
                    <input type="price" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Product Description :</label><br />
                    <input type="desc" 
                    name="desc"
                    value={desc} 
                    onChange={(e) => { setDesc(e.target.value) }} />
                </p>
                
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;

