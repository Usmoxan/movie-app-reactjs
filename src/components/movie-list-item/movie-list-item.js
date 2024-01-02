import { Component } from 'react';
import './movie-list-item.css';

class MovieListItem extends Component {
    constructor(props) {
        super(props)
        this.state = { favourite: false, like: false }
    }

    onFav = () => {
        this.setState(({ favourite }) => ({
            favourite: !favourite,
        }))
    }
    onLike = () => {
        this.setState(({ like }) => ({
            like: !like,
        }))
    }

    render() {
        const { name, viewers, onDelete } = this.props
        const { favourite, like } = this.state
        return (
            <li className={`list-group-item d-flex justify-content-between ${favourite && 'favorite'} ${like && "like"}`}>
                <span onClick={this.onLike} className='list-group-item-label'>{name}</span>
                <input type="number" className='list-group-item-input' defaultValue={viewers} />
                <div className='d-flex just-content-center align-items-center'>
                    <button type='button' className='btn-coockie btn-sm' onClick={this.onFav}>
                        <i className='fa-solid fa-cookie'></i>
                    </button>
                    <button type='button' className='btn-trash btn-sm' onClick={onDelete}>
                        <i className='fa-solid fa-trash'></i>
                    </button>
                    <i className="fa-solid fa-star"></i>

                </div>
            </li >
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
