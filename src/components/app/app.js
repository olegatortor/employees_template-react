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
                {name: 'Michel Sc', salary:'5000', increase: false, rise: false, id: 1},
                {name: 'Jim', salary:'3400', increase: false, rise: false, id: 2},
                {name: 'Dwight', salary:'4000', increase: false, rise: false, id: 3}
            ]
        }
        this.newId = this.state.data.length + 1;  
    }


    onDeleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        }) 
    }
    onAddItem = (name, salary) => {
        const newItem = {name: name, salary: salary, increase: false, rise: false, id: this.newId++}

        this.setState(({data}) => {
            const newData = [...data].concat(newItem)
            return  {
                data: newData
            }
        }) 
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    render() {
        const employees = this.state.data.length
        const increased = this.state.data.filter(item => item.increase).length

        return (
            <div className='app'>
                <AppInfo employees = {employees}
                         increased = {increased}/>
                <div className="box">
                    <AppSearch/>
                    <AppFilter/>
                </div>
                <AppList data = {this.state.data}
                         onDelete = {this.onDeleteItem}
                         onToggleProp = {this.onToggleProp}
                         />
                <AddEmployees onAdd = {this.onAddItem}/>
            </div>
        )
    }
}

export default App;