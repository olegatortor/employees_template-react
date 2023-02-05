import AppInfo from '../app-info/app-info';
import AppSearch from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';
import AppList from '../app-list/app-list';
import AddEmployees from '../app-add-employees/app-add-employees';

import './app.css'

function App() {
    return (
        <div className='app'>
            <AppInfo/>
            <div className="box">
                <AppSearch/>
                <AppFilter/>
            </div>
            <AppList/>
            <AddEmployees/>
        </div>
    )
}

export default App;