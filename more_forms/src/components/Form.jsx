import React, { useState } from 'react'

const Form = (props) => {
    
    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState('')

    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState('')

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const createUser = (e) => {
        e.preventDefault();  
    }
    
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length<2) {
            setFirstNameError("First Name must be at least 2 characters")
        } else {
            setFirstNameError("")
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length<2) {
            setLastNameError("Last Name must be at least 2 characters")
        } else {
            setLastNameError("")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length<2) {
            setEmailError("Email must be at least 2 characters")
        } else {
            setEmailError("")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length<8) {
            setPasswordError("Password must be at least 8 characters")
        } else {
            setPasswordError("")
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length<8 && password != e.target.value){
            setConfirmPasswordError("Password must be at least 8 characters" + " " + "Passwords must match")
        } else {
            setConfirmPasswordError("")
        }
    }

    return (
        <div>
            <form className="form col-4 mx-auto" onSubmit={ createUser }>

                <div>
                    <label className ="form-label">First Name</label>
                    <input type="text" 
                    onChange={ handleFirstName } 
                    className="form-control" />
                    {
                        firstNameError ?
                        <p>{ firstNameError }</p> : ''
                    }
                </div>

                <div>
                    <label className ="form-label">Last Name</label>
                    <input type="text" 
                    onChange={ handleLastName } 
                    className="form-control" />
                    {
                        lastNameError ?
                        <p>{ lastNameError }</p> : ''
                    }
                </div>

                <div>
                    <label className ="form-label">Email</label>
                    <input type="text" 
                    onChange={ handleEmail } 
                    className="form-control" />
                    {
                        emailError ?
                        <p>{ emailError }</p> : ''
                    }
                </div>

                <div>
                    <label className ="form-label">Password</label>
                    <input type="password" 
                    onChange={ handlePassword } 
                    className="form-control" />
                    {
                        passwordError ?
                        <p>{ passwordError }</p> : ''
                    }
                </div>

                <div>
                    <label className ="form-label">Confirm Password</label>
                    <input type="password" 
                    onChange={ handleConfirmPassword } 
                    className="form-control" />
                    {
                        confirmPasswordError ?
                        <p>{ confirmPasswordError }</p> : ''
                    }
                </div>

            </form>
        </div>
    )
}

export default Form;