
import { Component } from 'react';
import './app-list-item.css'

class AppListItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }
    
    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onAddLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const {name, salary, onDelete} = this.props
        const {increase} = this.state
        const {like} = this.state

        let incClass = increase ? 'increase': ''; 
        let likeE = like ? 'like': ''; 

        return (
            <li className={'item ' + incClass}>
                <span onClick={this.onAddLike}>{name}</span>
                <input type="text" defaultValue={salary + '$'} className='item-input'/>
    
                <div className='btns-item'>
                    <button className='btn-item' 
                            onClick={this.onIncrease}>
                        <i className='fas fa-cookie'></i>
                    </button>
    
                    <button onClick={onDelete} className='btn-item'>
                        <i className='fas fa-trash'></i>
                    </button>
                    <i className={'fas fa-star ' + likeE}></i>
                </div>
            </li>
        )
    }

    
}

export default AppListItem