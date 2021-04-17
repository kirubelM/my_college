import React, { useState, useEffect, Component } from 'react';
import { Button, InputLabel, FormControl, Input, Menu } from '@material-ui/core';
import Todo from './Todo';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { GoogleLogout } from 'react-google-login';
import './App.css';
import db from './firebase';
import firebase from 'firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RouteConfig from './Router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function AddData(props) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('')
  const classes = useStyles();


  const onSuccess = (res) => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
    props.history.push("/")
  };
  const clientId =
    '794363678933-27lpqhp3rr8mui0nqllau2kfncuf8bdk.apps.googleusercontent.com';
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })));
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
      <div className={classes.root, "dafas"}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
            {/* <MenuIcon />
          </IconButton> */}
          <Typography variant="h5" className={classes.title}>
           COLLEGIFY
          </Typography>
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
          ></GoogleLogout>
         
        </Toolbar>
      </AppBar>
    </div>
      
      <form className="adddata">
        <FormControl>
          {/* <button onClick={}> </button> */}
          <InputLabel > ✅ Write a Task</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input}  variant="contained"  color="primary" type="submit" onClick={addTodo}>
      Add Todo
        </Button>
      </form>
      <div className="view">
      <ul >  
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>
      </div>
      
      
      
  </div >


  );
}

export default AddData;

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


