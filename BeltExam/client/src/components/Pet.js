import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link} from 'react-router-dom';


const Pet = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [pet, setPet] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then((res) => {
            console.log(res)
            setPet(res.data.pet)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    const deletePet = (id) => {
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((res) => {
            console.log("Deleted Pet from Database")
            navigate('/')
            setPet(pet.filter((pet) => (
                pet._id !== id
            )))
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
    <div className='mx-4 mt-4'>
        <div className='d-flex justify-content-between'>
            <h1>Pet Shelter</h1>
            <Link to={"/"}>back to home</Link>
        </div>

        <div className='d-flex justify-content-between mb-4'>
            <h2>Details about: { pet.name }</h2>
            <button className="btn btn-danger m-4"  onClick={(e) => deletePet(pet._id)}>
                <span className='mx-2'>
                <ion-icon name="home-outline"></ion-icon>
                </span>
                <span>
                    Adopt { pet.name }
                </span>
                </button>
        </div>

        <div className='d-flex flex-column border border-dark pt-4 pb-4'>

            <div className='d-flex mx-4'>
                <p className='fw-bold' style={{width: '120px'}}>Pet Type:</p>
                <p>{ pet.type }</p>
            </div>

            <div className='d-flex mx-4'>
                <p className='fw-bold' style={{width: '120px'}}>Description:</p>
                <p>{ pet.description }</p>
            </div>

            <div className='d-flex mx-4'>
                <p className='fw-bold' style={{width: '120px'}}>Skills:</p>
                    <div>
                        <p>{ pet.skill1 }</p>
                        <p>{ pet.skill2 }</p>
                        <p>{ pet.skill3 }</p>
                    </div>
            </div>
        </div>

    </div>
    )
}

export default Pet;