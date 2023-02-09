import AppInfo from '../app-info/app-info';
import AppSearch from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';
import AppList from '../app-list/app-list';
import AddEmployees from '../app-add-employees/app-add-employees';

import './app.css'

const data = [
    {name: 'Michel Sc', salary:'5000', increase: false, id: 1},
    {name: 'Jim', salary:'3400', increase: false, id: 2},
    {name: 'Dwight', salary:'4000', increase: false, id: 3}
]

function App() {
    return (
        <div className='app'>
            <AppInfo/>
            <div className="box">
                <AppSearch/>
                <AppFilter/>
            </div>
            <AppList data = {data}/>
            <AddEmployees/>
        </div>
    )
}

export default App;