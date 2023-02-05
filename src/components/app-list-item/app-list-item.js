import './app-list-item.css'

function AppListItem() {
    return (
        <li className='item'>
            <span>Oleg Zelenskiy</span>
            <input type="text" defaultValue='1000$' className='item-input'/>

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