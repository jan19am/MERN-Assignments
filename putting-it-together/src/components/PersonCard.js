import React, { useState } from 'react';

const PersonCard = (props) => {
    const { firstName, lastName, hairColor } = props;
    const [ birthday, setBirthday ] = useState(props.age)

    return (
        <div>
            <h2>{ lastName },  { firstName }</h2>
            <p> Age: { birthday }</p> 
            <p> Hair Color: { hairColor }</p>
            <button onClick={ (event) => setBirthday(birthday + 1)}>Birthday Button for {firstName} {lastName} </button>
        </div>
    )
}

export default PersonCard;