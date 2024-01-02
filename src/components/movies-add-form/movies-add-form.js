import { Component } from 'react'
import './movies-add-form.css'

class MoviesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '+99', views: ''
        }
    }

    changHandleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    render() {

        const { name, views } = this.state
        
        return (
            <div className='movies-add-form'>
                <h3>Yangi kino qo'shish</h3>
                <form className='add-form d-flex'>
                    <input type="text" className='form-control new-post-label' value={this.state.name} placeholder='Qanday kino?' name='name' onChange={this.changHandleInput} />
                    <input type="number" className="form-control new-post-label' placeholder='Necha marta ko'rilgan?" views='views' onChange={this.changHandleInput} />
                    <button type='submit' className='btn btn-outline-dark'>Qo'shish</button>
                </form>
            </div>
        )
    }
}



export default MoviesAddForm