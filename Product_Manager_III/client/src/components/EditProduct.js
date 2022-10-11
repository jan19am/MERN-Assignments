import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) => {
            setTitle(res.data.product.title)
            setPrice(res.data.product.price)
            setDescription(res.data.product.description)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    const submitHandler = (e) => {

        e.preventDefault();

        axios.put(`http://localhost:8000/api/update/${id}`, {
            title,
            price,
            description
        }).then((res) => {
            navigate('/productlist')
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="col-3 mx-auto">
            <form onSubmit={ submitHandler }>
                <label className="form-label">Title:</label>
                <input type="text" className="form-control" value={ title } onChange={(e) => setTitle(e.target.value)} />

                <label className="form-label">Price:</label>
                <input type="number" className="form-control" value={ price } onChange={(e) => setPrice(e.target.value)} />

                <label className="form-label">Description:</label>
                <input type="text" className="form-control" value={ description } onChange={(e) => setDescription(e.target.value)} />

                <button type="submit" className="btn btn-light btn-outline-dark mt-4">Edit</button>
            </form>
        </div>
    )
}

export default EditProduct;