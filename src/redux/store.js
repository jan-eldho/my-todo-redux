// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todoSlice'; // Import your reducer

const store = configureStore({
  reducer: {
    todolistReducer: todoSlice, // Define your reducers here
  },
});

export default store;
