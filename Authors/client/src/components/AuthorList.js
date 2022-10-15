import React, { useState, useEffect } from 'react'
import {  useNavigate, Link } from 'react-router-dom'
import axios from 'axios'


const AuthorList = () => {

    const [list, setList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/allAuthors')
        .then((res) => {
            console.log(res)
            setList(res.data.author)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((res) => {
            console.log("Deleted Author from Database")
            setList(list.filter((author) => (
                author._id !== id
            )))
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
    <div className='mx-4 mt-4 col-5'>
        <h1>Favorite authors</h1>
        <Link to={"/addauthor"}>Add an author</Link>
        <p style={{color: 'blueviolet'}}>We have quotes by:</p>
        <table className='table table-striped table-bordered border-dark'>
            <thead>
                <tr className='text-center'>
                    <th>Author</th>
                    <th>Actions avaliable</th>
                </tr>
            </thead>
                <tbody>
        {
            list.map((author, index) => (
                <tr key={ index }>
                    <td className='align-middle text-center' style={{color: 'blueviolet'}}>{ author.name }</td>

                    <td><button type="submit" className="btn btn-secondary"><Link to={`/edit/${author._id}`} className="text-white text-decoration-none">Edit</Link></button>

                    <button className="btn btn-danger m-4" onClick={(e) => deleteAuthor(author._id)}>Delete</button></td>
                </tr>
            ))
        }
            </tbody>
        </table>
    </div>
    )
}

export default AuthorList;