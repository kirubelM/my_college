import React, { useState, useEffect, Component } from 'react';
import { Button, InputLabel, FormControl, Input, Menu } from '@material-ui/core';
import Todo from './Todo'
import './App.css';
import db from './firebase';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RouteConfig from './Router';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('')

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})));
    })
  }, []);

  // const addTodo = (event) => {  //Fires when button is clicked.
  //   event.preventDefault();//Stops Refresh.

  //   db.collection('todos').add({
  //     todo: input,
  //     timestamp: firebase.firestore.FieldValue.serverTimestamp()
  //   })
  
  //   setInput('');//Clear input after adding the todo.
  // }
  return (

    <div className="App">
     
      <RouteConfig/>
     
      
      
  </div>


  );
}

export default App;

  // const Home = () => {
  //   <div className="App">
  //     <NavBar></NavBar>
  //     <h2>My Tasks</h2>

  //     <form>
  //       <FormControl>
  //         <InputLabel> ✅ Write a Todo</InputLabel>
  //         <Input value={input} onChange={event => setInput(event.target.value)}/>
  //       </FormControl>
  //       <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>
  //         Add Todo
  //       </Button>
  //     </form>
  //     <ul>  
  //       {todos.map(todo => (
  //         <Todo todo={todo}/>
  //       ))}
  //     </ul>
  //   </div>

  // }


  