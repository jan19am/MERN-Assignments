import React, { useState } from 'react'

const Boxes = (props) => {
    const [color, setColor] = useState('')
    const [boxes, setBoxes] = useState([])

    const handleOnSubmit = (e) => {

        e.preventDefault();
        setBoxes([...boxes, color])
        setColor('')  
    }

    return (
        <div>
            <form onSubmit={ handleOnSubmit }>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Color</label>
                    <input onChange={(e) => {setColor(e.target.value);}} 
                    value={ color } type="text" className="form-control" id="exampleFormControlInput1"/>
                    <button type="submit" className="btn btn-outline-dark">Add</button>
                </div>
            </form>
            
            {boxes.map((boxColor, index) => {
                return (
                    <div className="boxes" key={ index }>
                        <div className="box-object" style={{backgroundColor: boxColor}}></div>
                    </div>
                );
            })}
        </div>
    );
}

export default Boxes;
