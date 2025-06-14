import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    const todosFromStorage = JSON.parse(localStorage.getItem("todos"));
    if (todosFromStorage?.length) {
      setTodos(todosFromStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8 border border-red-500">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white border border-green-500">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2 border border-yellow-500">
            Manage Your Todos
          </h1>
          <div className="mb-4 border border-blue-900">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3 border border-purple-500">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full border border-pink-500">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
