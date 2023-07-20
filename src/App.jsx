import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos";

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];

function App() {
  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() =>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    setTodos;
  };

  const deleteTodo = (id) => {
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodos(newArray);
  };

  const updateTodo = (id) => {
    const newArray = todos.map((todo) => {
      todo.id === id && (todo.state = !todo.state);
      return todo;
    });
    setTodos(newArray);
  };

  const orderTodos = (arrayTodos) => {
    return arrayTodos.sort((a, b) => {
      if (a.priority === b.priority) return 0;
      if (a.priority === true) return -1;
      if (a.priority === false) return 1;
    });
  };

  orderTodos;
  return (
    <div className="container mb-2">
      <h1 className="my-5">Formularios</h1>
      <Formulario addTodo={addTodo} />
      <Todos
        todos={orderTodos(todos)}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
