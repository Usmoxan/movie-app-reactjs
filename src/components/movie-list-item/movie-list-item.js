import './movie-list-item.css';


const MovieListItem = ({ name, viewers, favorite }) => {
    return (
        <li className={`list-group-item d-flex justify-content-between ${favorite && 'favorite'}`}>
            <span className='list-group-item-label'>{name}</span>
            <input type="number" className='list-group-item-input' defaultValue={viewers} />
            <div className='d-flex just-content-center align-items-center'>
                <button type='button' className='btn-coockie btn-sm'>
                    <i className='fa-solid fa-cookie'></i>
                </button>
                <button type='button' className='btn-trash btn-sm'>
                    <i className='fa-solid fa-trash'></i>
                </button>
                <i className="fa-solid fa-heart"></i>

            </div>
        </li>
    );
}

export default MovieListItem;
