import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const EditAuthor = () => {

    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then((res) => {
            setName(res.data.author.name)
        }).catch((err) => {
            console.log(err)
        })
    },[])
    
    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.put(`http://localhost:8000/api/update/${id}`, {
            name
        }).then((res) => {
            navigate('/allauthors')
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
    <div className='mx-4 mt-4'>
        <Link to={"/allauthors"}>Home</Link>
        <p style={{color: 'blueviolet'}}>edit this author</p>
        <form className='border border-dark w-50 p-4' onSubmit={ onSubmitHandler }>
            <div>
            <label className='form-label'>Name:</label>
            <input className='form-control' type="text" value={ name } onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
            { errors.name ? <span className='text-danger'>{errors.name.message}</span> : null}
            </div>

            <div className='mt-4'>
            <button className="btn btn-primary"><Link to={"/allauthors"} className="text-white text-decoration-none">Cancel</Link></button>
            <button type="submit" className="btn btn-primary mx-4">Submit</button>
            </div>
        </form>
    </div>
    )
}

export default EditAuthor;