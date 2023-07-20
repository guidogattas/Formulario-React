import Todo from "./Todo";

const Todos = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div className="mt-5">
      <h2 className="text-center mb-5">Todos</h2>
      <ul className="list-group text-center">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
        ))}
        {
            todos.length === 0 && "NO HAY TAREAS PARA MOSTRAR"
        }
      </ul>
    </div>
  );
};

export default Todos;
