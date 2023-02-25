import './app-list-item.css'

function AppListItem(props) {
    const {name, salary, increase, rise, onDelete, onToggleProp, onChangeSalary} = props
    let incClass = increase ? 'increase': ''; 
    let likeE = rise ? 'like': ''; 

    return (
        <li className={'item '+ incClass}>
            <span  onClick={onToggleProp} data-toggle='rise'>{name}</span>
            <input  type="text" 
                    defaultValue={salary + '$'} 
                    className='item-input'
                    onChange={onChangeSalary}/>

            <div className='btns-item'>
                <button className='btn-item' 
                        onClick={onToggleProp}
                        data-toggle='increase'>
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

export default AppListItem