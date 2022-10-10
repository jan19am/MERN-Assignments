import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Product = () => {

    const {id} = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) => {
            console.log(res)
            setProduct(res.data.product)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <div className="col-3 mx-auto">
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/productlist"}>Go Back</Link>
        </div>
    );
}

export default Product;