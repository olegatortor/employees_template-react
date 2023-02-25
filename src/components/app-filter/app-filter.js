import "./app-filter.css";


function AppFilter(props) {
    const btnList = [
        {name: 'all', label: 'Всі працівники'},
        {name: 'increase', label: 'На підвищення'},
        {name: 'more1000', label: 'З/П більше 1000$'}
    ]

    const buttons = btnList.map(({name, label}) => {
        const clazz = props.filter === name ? 'btn_active': '';
        return (
            <button className={`btn ${clazz}`} 
                    type='button'
                    key={name}
                    onClick = {() => props.onFilterSelect(name)}>{label}</button>
        )
    })

    return (
        <div className='filter-btns'>
            {buttons}
        </div>
    )
}

export default AppFilter