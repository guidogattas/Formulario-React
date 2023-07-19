import { useRef, useState } from "react";

const NoControlado = () => {
  const form = useRef(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    //Capturamos los datos:
    const data = new FormData(form.current);
    const { title, description, state } = Object.fromEntries([
      ...data.entries(),
    ]);
    console.log(title, description, state);

    // Validar los datos:

    if (!title.trim()) {
      return setError("Completa los datos");
    }

    if (!description.trim()) {
      return setError("Completa la descripción");
    }

    // Enviar los datos:
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        defaultValue="Tarea 1 Prueba"
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese Descripción"
        name="description"
        defaultValue="Descripción 1 Prueba"
      ></textarea>
      <select className="form-select mb-2" name="state">
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Procesar
      </button>
      <p>{error && <p>{error}</p>}</p>

    </form>
  );
};

export default NoControlado;
