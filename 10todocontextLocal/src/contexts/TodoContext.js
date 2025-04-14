import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Message",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};
export const TodoProvider = TodoContext.Provider;

//---------------------gpt
/**
 * // TodoContext.js
import { createContext, useContext } from "react";

export const TodoContext = createContext();

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = ({ children, value }) => {
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

 */
