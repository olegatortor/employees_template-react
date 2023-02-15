import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import AppSearch from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';
import AppList from '../app-list/app-list';
import AddEmployees from '../app-add-employees/app-add-employees';

import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Michel Sc', salary:'5000', increase: false, id: 1},
                {name: 'Jim', salary:'3400', increase: false, id: 2},
                {name: 'Dwight', salary:'4000', increase: false, id: 3}
            ]
        }
        this.newId = this.state.data.length + 1
    }


    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        }) 
    }
    addItem = (name, salary) => {
        const newItem = {name: name, salary: salary, increase: false, id: this.newId++}

        this.setState(({data}) => {
            const newData = [...data].concat(newItem)
            return  {
                data: newData
            }
        })
    }

    render() {
        return (
            <div className='app'>
                <AppInfo/>
                <div className="box">
                    <AppSearch/>
                    <AppFilter/>
                </div>
                <AppList data = {this.state.data}
                         onDelete = {this.deleteItem}
                         />
                <AddEmployees onAdd = {this.addItem}/>
            </div>
        )
    }
}

export default App;