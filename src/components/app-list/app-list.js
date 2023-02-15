import './app-list.css'
import AppListItem from '../app-list-item/app-list-item'

function AppList({data, onDelete}) {
    const list = data.map(item => {        
        const {id, ...itemProps} = item
        return (
            <AppListItem key = {id}
                        {...itemProps}
                        onDelete = {() => onDelete(id)}
                        />
        )
    })

    return (
        <div className='box box-white'>
            {list}
        </div>
    )
}
export default AppList