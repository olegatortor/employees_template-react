import './app-list.css'
import AppListItem from '../app-list-item/app-list-item'

function AppList({data, onDelete, onToggleProp, onChangeSalary}) {
    const list = data.map(item => {        
        const {id, ...itemProps} = item
        return (
            <AppListItem key = {id}
                        {...itemProps}
                        onDelete = {() => onDelete(id)}
                        onToggleProp = {(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                        onChangeSalary = {(e) => onChangeSalary(id, e.target.value)}/>
        )
    })

    return (
        <ul className='box box-white'>
            {list}
        </ul>
    )
}
export default AppList