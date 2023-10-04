import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const EditPet = () => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");

    const [errors, setErrors] = useState({});

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then((res) => {
            setName(res.data.pet.name)
            setType(res.data.pet.type)
            setDescription(res.data.pet.description)
            setSkill1(res.data.pet.skill1)
            setSkill2(res.data.pet.skill2)
            setSkill3(res.data.pet.skill3)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.put(`http://localhost:8000/api/update/${id}`, {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        }).then((res) => {
            console.log(res)
            navigate('/')
        }).catch((err) => {
            console.log(err)
            setErrors(err.response.data.error.errors)
        })
    }

    return (
    <div className='mx-4 mt-4'>
        <div className='d-flex justify-content-between'>
            <h1>Pet Shelter</h1>
            <Link to={"/"}>back to home</Link>
        </div>
        <h2>Edit { name }</h2>
        <form className='d-flex border border-dark w-50 pt-4 pb-4' onSubmit={ onSubmitHandler }>
            <div className='px-4'>
                <div>
                    <label className='form-label'>Name:</label>
                    <input className='form-control' type="text" value={ name } onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                { errors.name ? <span className='text-danger'>{errors.name.message}</span> : null}
                </div>

                <div>
                    <label className='form-label'>Type:</label>
                    <input className='form-control' type="text" value={ type } onChange={(e) => setType(e.target.value)} />
                </div>

                <div>
                { errors.type ? <span className='text-danger'>{errors.type.message}</span> : null}
                </div>

                <div>
                    <label className='form-label'>Description:</label>
                    <input className='form-control' type="text" value={ description } onChange={(e) => setDescription(e.target.value)} />
                </div>

                <div>
                { errors.description ? <span className='text-danger'>{errors.description.message}</span> : null}
                </div>

                <div className='mt-4'>
                    <button type="submit" className="btn btn-primary">
                        <span className='mx-2'>
                            <ion-icon name="pencil-outline"></ion-icon>
                        </span>
                        <span>
                            Edit Pet
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <div>
                    <p>Skills (optional):</p>
                </div>
                <div>
                    <label className='form-label'>Skill 1:</label>
                    <input className='form-control' type="text" value={ skill1 } onChange={(e) => setSkill1(e.target.value)} />
                </div>

                <div>
                    <label className='form-label'>Skill 2:</label>
                    <input className='form-control' type="text" value={ skill2 } onChange={(e) => setSkill2(e.target.value)} />
                </div>

                <div>
                    <label className='form-label'>Skill 3:</label>
                    <input className='form-control' type="text" value={ skill3 } onChange={(e) => setSkill3(e.target.value)} />
                </div>
            </div>
        </form>
    </div>
    )
}

export default EditPet;