import { createSlice, nanoid } from "@reduxjs/toolkit";
import { loadTodos } from "../../utils/localStorage";

const initialState = {
  todos: loadTodos(),
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        complete: false,
      };
      state.todos.push(todo);
    },
    updateTodo: (state, action) => {
      // const {id, text} = action.payload
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.complete = !todo.complete;
      }
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
