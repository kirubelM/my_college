import React, { useState, useEffect, Component } from 'react';
import { Button, InputLabel, FormControl, Input } from '@material-ui/core';
import Todo from './Todo'
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('')

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})));
    })
  }, []);

  const addTodo = (event) => {  //Fires when button is clicked.
    event.preventDefault();//Stops Refresh.

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');//Clear input after adding the todo.
  }
  return (
    
    <div className="App">
      <h1>My Task</h1>

      <form>
        <FormControl>
          <InputLabel> ✅ Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>
          Add Todo
        </Button>
      </form>
      <ul>  
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
