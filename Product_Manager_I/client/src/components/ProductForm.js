import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.post('http://localhost:8000/api/addProduct', {
            title,
            price,
            description
        }) 
            .then((res) => {
                console.log(res) 
            }) 
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="col-3 mx-auto">
            <form onSubmit={ onSubmitHandler }>
                <label className="form-label">Title:</label>
                <input type="text" className="form-control" value={ title } onChange={(e) => setTitle(e.target.value)} />

                <label className="form-label">Price:</label>
                <input type="number" className="form-control" value={ price } onChange={(e) => setPrice(e.target.value)} />

                <label className="form-label">Description:</label>
                <input type="text" className="form-control" value={ description } onChange={(e) => setDescription(e.target.value)} />

                <button type="submit" className="btn btn-light btn-outline-dark mt-4">Create</button>
            </form>
        </div>
    )
}

export default ProductForm;