const Todo = ({ todo }) => {
  const { id, title, description, state, priority } = todo;

  return (
    <li key={id} className="list-group-item">
      <div>
        <h5>{title}</h5>
        <p>{description}</p>
        <div className="d-flex gap-2">
          <button className="btn btn-sm btn-danger">Eliminar</button>
          <button className="btn btn-sm btn-warning">Actualizar</button>
        </div>
        <span className="badge text-bg-primary">{priority && "Prioritario"}</span>
      </div>
    </li>
  );
};

export default Todo;
