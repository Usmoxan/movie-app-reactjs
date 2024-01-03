import { Component } from "react";
import "./movie-list-item.css";

class MovieListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { favorite: false, like: false };
  }

  render() {
    const { name, viewers, onDelete, onToggleProp, favorite, like } =
      this.props;

    return (
      <li
        className={`list-group-item d-flex justify-content-between ${
          favorite && "favorite"
        } ${like && "like"}`}
      >
        <span
          onClick={onToggleProp}
          className="list-group-item-label"
          data-toggle="like"
        >
          {name}
        </span>
        <input
          type="number"
          className="list-group-item-input"
          defaultValue={viewers}
        />
        <div className="d-flex just-content-center align-items-center">
          <button
            type="button"
            className="btn-coockie btn-sm"
            onClick={onToggleProp}
            data-toggle="favorite"
          >
            <i className="fa-solid fa-cookie"></i>
          </button>
          <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fa-solid fa-trash"></i>
          </button>
          <i className="fa-solid fa-star"></i>
        </div>
      </li>
    );
  }
}

// const MovieListItem = () => {
//     return (
//         <li className={`list-group-item d-flex justify-content-between ${favorite && 'favorite'}`}>
//             <span className='list-group-item-label'>{name}</span>
//             <input type="number" className='list-group-item-input' defaultValue={viewers} />
//             <div className='d-flex just-content-center align-items-center'>
//                 <button type='button' className='btn-coockie btn-sm'>
//                     <i className='fa-solid fa-cookie'></i>
//                 </button>
//                 <button type='button' className='btn-trash btn-sm'>
//                     <i className='fa-solid fa-trash'></i>
//                 </button>
//                 <i className="fa-solid fa-heart"></i>

//             </div>
//         </li >
//     );
// }

export default MovieListItem;
