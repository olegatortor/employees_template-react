import './app-list-item.css'

function AppListItem({name, salary, increase}) {
    let incClass = increase ? 'increase': ''; 

    return (
        <li className={'item ' + incClass}>
            <span>{name}</span>
            <input type="text" defaultValue={salary + '$'} className='item-input'/>

            <div className='btns-item'>
                <button className='btn-item'>
                    <i className='fas fa-cookie'></i>
                </button>

                <button className='btn-item'>
                    <i className='fas fa-trash'></i>
                </button>
                <i className='fas fa-star like'></i>
            </div>
        </li>
    )
}

export default AppListItem