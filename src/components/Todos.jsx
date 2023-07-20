import Todo from "./Todo";

const Todos = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div className="mt-5">
      <h2 className="text-center mb-5">LISTADO TAREAS</h2>
      <ul className="list-group text-center">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
        {todos.length === 0 && (
          <h3 className="text-center mb-5 text-danger">
            NO HAY TAREAS PARA MOSTRAR
          </h3>
        )}
      </ul>
    </div>
  );
};

export default Todos;
