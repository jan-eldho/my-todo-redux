// src/redux/todoSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.push({ text: action.payload, completed: false });
    },
    removeFromList: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state[action.payload];
      todo.completed = !todo.completed;
    },
  },
});

export const { addToList, removeFromList, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
