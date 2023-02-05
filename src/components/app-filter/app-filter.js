import './app-filter.css'

function AppFilter() {
    return (
        <div className='filter-btns'>
            <button className='btn btn_active' type='button'>Всі працівники</button>
            <button className='btn' type='button'>На підвищення</button>
            <button className='btn' type='button'>З/П більше 1000$</button>
        </div>
    )
}

export default AppFilter