import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const ProductList = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
        .then((res) => {
            console.log(res)
            setList(res.data.product)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <div className="col-3 mx-auto">
            <h1>All Products:</h1>
            {
                list.map((product, index) => (
                    <div key={ index } className="center">
                        <Link to={`/singleproduct/${product._id}`}>{ product.title }</Link>
                    </div>
                ))
            }
        </div>
    );
}

export default ProductList;