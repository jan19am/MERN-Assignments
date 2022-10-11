import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link} from 'react-router-dom';

const Product = () => {

    const {id} = useParams();
    const navigate = useNavigate();

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

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((res) => {
            console.log("Deleted Product from Database")
            navigate('/productlist')
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="col-3 mx-auto">
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button className="btn btn-info"><Link to={`/edit/${product._id}`} className="text-white text-decoration-none">Edit</Link></button>
            <button className="btn btn-danger m-4" onClick={(e) => deleteProduct(product._id) }>Delete</button>
            <Link to={"/productlist"}>Go Back</Link>
        </div>
    )
}

export default Product;