import React, { useState } from 'react'

const Todo = (props) => {

    const {list, i, checkComplete, handleDelete} = props

    const listClasses = ["none"];

        if (list.complete) {
            listClasses.push("crossed-out");
        }

    return (
        <div class="todo-list">
            <p className={listClasses.join(" ")} >{ list.text }</p>
            <input class="radio" onChange={(e) => {
                checkComplete(i);
            }}
            checked= { list.complete }
            type="checkbox" />
            <button class="delete" onClick={(e) => {
                handleDelete(i);
            }}>Delete</button>
        </div> 
    );
}

export default Todo;