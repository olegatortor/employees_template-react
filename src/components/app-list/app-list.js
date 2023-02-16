import './app-list.css'
import AppListItem from '../app-list-item/app-list-item'

function AppList({data, onDelete, onToggleProp}) {
    
    const list = data.map(item => {        
        const {id, ...itemProps} = item
        return (
            <AppListItem key = {id}
                        {...itemProps}
                        onDelete = {() => onDelete(id)}
                        onToggleProp = {(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    return (
        <div className='box box-white'>
            {list}
        </div>
    )
}
export default AppList