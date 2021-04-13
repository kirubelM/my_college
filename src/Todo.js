import { List, ListItemText, ListItem, ListItemAvatar, Modal} from '@material-ui/core';
import './Todo.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import React, {useState} from 'react'
import db from './firebase';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 200,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    table: {
        Width: 450,
        backgroundColor:'lightgray',
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
    let a;
    return (
        <div className="Todo_content">
       
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
       <div className="fortable">
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
            <TableRow >
              <TableCell component="th" scope="row">
              {props.todo.todo}
              </TableCell>
              
              <TableCell align="right">
              <button className="edit" onClick={e => setOpen(true)}>Edit</button>
            <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete⛔</DeleteIcon>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
         </div>
      
        </div>
    )
}

export default Todo
