import AppInfo from '../app-info/app-info';
import AppSearch from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';
import AppList from '../app-list/app-list';
import AddEmployees from '../app-add-employees/app-add-employees';

import './app.css'

const data = [
    {name: 'Michel Sc', salary:'5000'},
    {name: 'Jim', salary:'3400'},
    {name: 'Dwight', salary:'4000'}
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