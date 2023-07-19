import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({addTodo}) => {
  const [todo, setTodo] = useState({
    title: "Todo #01",
    description: "Descripción #01",
    state: "pendiente",
    priority: true,
  });

  const { title, description, state, priority } = todo;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Título y descripción obligatorios",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
    addTodo({
      id: Date.now(),
      ...todo,
      state: state === 'Completado',
      
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Todo agregado',
      showConfirmButton: false,
      timer: 1500
    })
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={handleChange}
      />

      <textarea
        className="form-control mb-2"
        placeholder="Ingrese Descripción"
        name="description"
        value={description}
        onChange={handleChange}
      ></textarea>
      <div className="form-check mb-2">
        <input
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="inputCheck"
          checked={priority}
          onChange={handleChange}
        />
        <label htmlFor="inputCheck">Dar Prioridad</label>
      </div>

      <select
        className="form-select mb-2"
        name="state"
        value={state}
        onChange={handleChange}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Agregar Todo
      </button>
    </form>
  );
};

export default Formulario;
