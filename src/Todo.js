import { List, ListItemText, ListItem, ListItemAvatar} from '@material-ui/core'
import './Todo.css';
import React from 'react'
import db from './firebase';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy Deadline⏰" />
            </ListItem>
            <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete⛔</DeleteIcon>
        </List>
    )
}

export default Todo
