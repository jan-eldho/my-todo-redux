// src/components/Todolist.jsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToList, removeFromList, toggleComplete } from '../redux/todoSlice';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function Todolist() {
  const tasks = useSelector((state) => state.todolistReducer); // Get tasks from Redux store
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  // Add a new task
  const addTask = () => {
    if (task.trim()) {
      dispatch(addToList(task)); // Dispatch the task to Redux store
      setTask(''); // Clear the input field
    }
  };

  // Remove a task
  const removeTask = (index) => {
    dispatch(removeFromList(index)); // Dispatch the remove action
  };

  // Toggle task completion
  const toggleTaskComplete = (index) => {
    dispatch(toggleComplete(index)); // Dispatch the toggle complete action
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        My Todo List
      </Typography>

      <Paper
        elevation={3}
        sx={{
          backgroundColor: 'orange',
          padding: 4,
          borderRadius: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </Box>

        <Button variant="contained" color="primary" onClick={addTask}>
          Add Task
        </Button>

        <List sx={{ marginTop: 4 }}>
          {tasks.length === 0 && (
            <Typography align="center" sx={{ marginTop: 2 }}>
              No tasks added
            </Typography>
          )}

          {tasks.map((task, index) => (
            <ListItem
              key={index}
              sx={{
                backgroundColor: '#fff',
                borderRadius: 1,
                marginBottom: 1,
                boxShadow: 1,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Checkbox
                checked={task.completed}
                onChange={() => toggleTaskComplete(index)}
              />

              <ListItemText
                primary={task.text}
                sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              />

              <IconButton edge="end" aria-label="delete" onClick={() => removeTask(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default Todolist;
