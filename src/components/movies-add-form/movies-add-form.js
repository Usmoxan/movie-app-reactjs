import { useState } from "react";
import "./movies-add-form.css";


const MoviesAddForm = ({ addForm }) => {
  const [state, setState] = useState({ name: '', views: '' })


  const changeHandleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  };

  const addFormHandler = (e) => {
    e.preventDefault();
    if (state.name === "" || state.views === "") return
    const data = { name: state.name, views: state.views }
    addForm(data);
    setState({ name: '', views: '' })

  }
  return (
    <div className="movies-add-form" >
      <h3>Yangi kino qo'shish</h3>
      <form className="add-form d-flex" onSubmit={addFormHandler}>
        <input
          type="text"
          className="form-control new-post-label"
          value={state.name}
          placeholder="Qanday kino?"
          name="name"
          onChange={changeHandleInput}
        />
        <input
          type="number"
          className="form-control new-post-label"
          value={state.views}
          placeholder="Necha marta korilgan?"
          name="views"
          onChange={changeHandleInput}
        />
        <button type="submit" className="btn btn-outline-dark">
          Qo'shish
        </button>
      </form>
    </div>
  );


}
export default MoviesAddForm
