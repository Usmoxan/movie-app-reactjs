import "./movie-list-item.css";

const MovieListItem = (props) => {
  const { name, viewers, onDelete, onToggleProp, favorite, like } = props;
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
};

export default MovieListItem;
