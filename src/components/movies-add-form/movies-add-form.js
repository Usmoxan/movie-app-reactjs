import { Component } from "react";
import "./movies-add-form.css";


class MoviesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      views: "",
    };
  }

  changeHandleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addFormHandler = (e) => {
    e.preventDefault();
    this.props.addForm({
      name: this.state.views,
      views: this.state.views,
    });
    this.setState({
      name: "",
      views: "",
    });
  };

  //(e) => addForm(e, { name, views })

  render() {
    const { name, views } = this.state;

    return (
      <div className="movies-add-form" onSubmit={this.addFormHandler}>
        <h3>Yangi kino qo'shish</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            value={name}
            placeholder="Qanday kino?"
            name="name"
            onChange={this.changeHandleInput}
          />
          <input
            type="number"
            className="form-control new-post-label"
            value={views}
            placeholder="Necha marta korilgan?"
            name="views"
            onChange={this.changeHandleInput}
          />
          <button type="submit" className="btn btn-outline-dark">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default MoviesAddForm;
