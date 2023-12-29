import './movie-list-item.css';


const MovieListItem = () => {
    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span className='list-group-item-label'>Empire of Osman</span>
            <input type="number" className='list-group-item-input' defaultValue='156' />
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
