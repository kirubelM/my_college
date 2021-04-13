import { List, ListItemText, ListItem, ListItemAvatar, Modal} from '@material-ui/core';
import './Todo.css';
import React, {useState} from 'react'
import db from './firebase';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const handleOpen = () => {
        setOpen(true);
    };
    
    const updateTodo = () => {
        //update todo with input
        db.collection('todos').doc(props.todo.id).set(
            {todo: input},
            {merge: true});//prevents you from overwriting
        setOpen(false);
    }
    return (
        <div className="Todo_content">
        <>
        <Modal
            open = {open}
            onClose = {e => setOpen(false)}
        >
            <div className={classes.paper}>
                <h1>Task Update</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <Button onClick={updateTodo}>Update task</Button>
            </div>
        </Modal>
        {/* <List className=""> */}
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} /*secondary="Dummy Deadline⏰" *//>
            </ListItem>
            <button className="edIcon" onClick={e => setOpen(true)}>Edit</button>
            <DeleteIcon className="delIcon" onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete⛔</DeleteIcon>
        {/* </List> */}
        </>
        </div>
    )
}

export default Todo
