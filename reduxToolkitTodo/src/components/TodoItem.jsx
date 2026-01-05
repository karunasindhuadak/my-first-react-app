import React, { useState, useRef, useEffect } from "react";
import {
  updateTodo,
  deleteTodo,
  toggleComplete,
} from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
function TodoItem({ todo }) {
  const [todoMsg, setTodoMsg] = useState(todo.text);
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const dispatch = useDispatch();

  const inputRef = useRef(null)

  useEffect(() => {
    if(isTodoEditable) {
        inputRef.current?.focus()
    }
  }, [isTodoEditable])

  const toggleCompleted = () => {
    dispatch(toggleComplete({id: todo.id}));
  };

  const editTodo = () => {
    dispatch(updateTodo({id: todo.id, text: todoMsg}));
    setIsTodoEditable((prev) => !prev)
  };
  return (
    <div
      className={`w-full flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.complete ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.complete}
        onChange={toggleCompleted}
      />
      <input
        ref={inputRef}
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.complete ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.complete) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.complete}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => dispatch(deleteTodo({id:todo.id}))}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
