import React, { useState } from 'react'

const Form = (props) => {
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const createUser = (e) => {
        e.preventDefault();

        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);

    }

    return (
        <div>
            <form className="form col-4 mx-auto" onSubmit={ createUser }>
                <label className ="form-label">First Name:</label>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)} className="form-control"></input>

                <label className ="form-label">Last Name:</label>
                <input type="text" onChange={(e)=>setLastName(e.target.value)} className="form-control"></input>

                <label className ="form-label">Email:</label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} className="form-control"></input>

                <label className ="form-label">Password:</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control"></input>

                <label className ="form-label">Confirm Password:</label>
                <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)} className="form-control"></input>

            </form>

            <div class="container text-center">
                <h2>Your Form Data</h2>
                <div class="row justify-content-start">
                    <div class="col-4">
                    <p>First Name</p>
                    </div>
                    <div class="col-4">
                    <p>{ firstName }</p>
                    </div>
                </div>
                <div class="row justify-content-start">
                    <div class="col-4">
                    <p>Last Name</p>
                    </div>
                    <div class="col-4">
                    <p>{ lastName }</p>
                    </div>
                </div>
                <div class="row justify-content-start">
                    <div class="col-4">
                    <p>Email</p>
                    </div>
                    <div class="col-4">
                    <p>{ email }</p>
                    </div>
                </div>
                <div class="row justify-content-start">
                    <div class="col-4">
                    <p>Password</p>
                    </div>
                    <div class="col-4">
                    <p>{ password }</p>
                    </div>
                </div>
                <div class="row justify-content-start">
                    <div class="col-4">
                    <p>Confirm Password</p>
                    </div>
                    <div class="col-4">
                    <p>{ confirmPassword }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;