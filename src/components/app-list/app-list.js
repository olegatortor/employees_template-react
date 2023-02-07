import './app-list.css'
import AppListItem from '../app-list-item/app-list-item'

function AppList({data}) {
    const list = data.map(item => {
        return (
            <AppListItem {...item} increase = {false}/>
        )
    })

    return (
        <div className='box box-white'>
            {list}
        </div>
    )
}
export default AppList