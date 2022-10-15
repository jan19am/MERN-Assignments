import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const AuthorForm = () => {

    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.post('http://localhost:8000/api/addAuthor', {
            name
        })
        .then((res) => {
            console.log(res)
            navigate('/allauthors')
        }).catch ((err) => {
            console.log(err)
            setErrors(err.response.data.error.errors)
        })
    }

    return (
    <div className='mx-4 mt-4'>
        <Link to={"/allauthors"}>Home</Link>
        <p style={{color: 'blueviolet'}}>Add a new author:</p>
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

export default AuthorForm