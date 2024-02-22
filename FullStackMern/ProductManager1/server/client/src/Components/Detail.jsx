import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [product.title || product.Detail || product.price]);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then((res) => {
                console.log("Deleted");
            })
            .catch(err => console.error(err));
        navigate("/products");

    }
    return (
        <div>
            <p key={id}>Title: {product.title}</p>
            <p key={id} >Price: {product.price}</p>
            <p key={id}>Desc: {product.desc}</p>
            <Link to={"/product/" + product._id + "/edit"}>
                Edit
            </Link>
            <button onClick={(e) => { deleteProduct(product._id) }}>
                Delete
            </button>
        </div>

    )
}

export default Detail;

