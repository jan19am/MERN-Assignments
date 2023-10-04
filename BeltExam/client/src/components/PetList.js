import React, { useState, useEffect } from 'react'
import {  useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const PetList = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/allPets')
        .then((res) => {
            console.log(res)
            setList(res.data.pet)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    return (
    <div className='mx-4 mt-4'>
        <div className='d-flex justify-content-between'>
            <h1>Pet Shelter</h1>
            <Link to={"/pets/new"}>add a pet to the shelter</Link>
        </div>
        <h2>These pets are looking for a good home</h2>
        <div className='col-7'>
            <table className='table table-striped table-bordered border-dark'>
                <thead>
                    <tr className='bg-secondary'>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                    <tbody>
            {
                list.map((pet, index) => (
                    <tr key={ index }>
                        <td>{ pet.name }</td>
                        <td>{ pet.type }</td>
                        <td>
                            <Link className='mx-2 border-end border-dark px-2' to={`/pets/${pet._id}`}>details</Link>
                            
                            <Link to={`/pets/${pet._id}/edit`}>edit</Link>
                        </td>
                    </tr>
                ))
            }
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default PetList;