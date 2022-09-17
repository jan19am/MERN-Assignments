import './App.css';
import React, { useState } from 'react';
import Todo from './components/Todo';

function App() {
  const [newList, setNewList] = useState('');
  const [lists, setLists] = useState([]);

  //This is the form to make the list possible//
  const handleSubmit = (e) => {
    e.preventDefault();

    //Condition to prevent User from adding a blank object//
    if (newList.length === 0) {
      return;
    }

    //Combining two parts of state on Todo List: What is the Todo Item and
    //is it complete//
    const listItem = {
      text: newList,
      complete: false
    };

    setLists([...lists, listItem]);
    setNewList('');
  };

  //Deleting an object from the list//

  const handleDelete = (deletId) => {
    const adjustedList = lists.filter((_list, i) => {
      return i !== deletId;
    });
    setLists(adjustedList);
  }

  //Makes a copy of list after checking a todo off//

  const checkComplete = (checkId) => {
    const completedTodo = lists.map((list, i) => {
      if (checkId === i) {
        const completedTodo = { ...list, complete: !list.complete };
        return completedTodo;
      }
      return list;
    });
    setLists(completedTodo);
  }

  return (
    <div className="App">
      <form onSubmit={ handleSubmit }>
        <div class="mb-3">
          <input class="user_input" onChange={(e) => {
            setNewList(e.target.value);
          }}
          value={ newList }
          type="text" className="form-cntrl"/>
        </div>
        <button type="submit" class="btn btn-primary">Add</button>
      </form>

      {lists.map((list, i) => {
        return <Todo
        key = { i }
        i = { i }
        list = { list }
        checkComplete = { checkComplete }
        handleDelete = { handleDelete } 
        />;
      })}
    </div>
  );
}

export default App;
