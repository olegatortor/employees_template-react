import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import AppSearch from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';
import AppList from '../app-list/app-list';
import AddEmployees from '../app-add-employees/app-add-employees';

import './app.scss'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Michel Sc', salary:'5000', increase: false, rise: false, id: 1},
                {name: 'Jim', salary:'3400', increase: true, rise: false, id: 2},
                {name: 'Dwight', salary:'4000', increase: true, rise: false, id: 3},
                {name: 'Anj', salary:'700', increase: false, rise: true, id: 4}
            ],
            term: '',
            filter: 'all'
        }
        this.newId = this.state.data.length + 1;  
    }

    onDelete = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        }) 
    }
    onAdd = (name, salary) => {
        const newItem = {name: name, salary: salary, increase: false, rise: false, id: this.newId++}

        this.setState(({data}) => {
            const newData = [...data].concat(newItem)
            return  {
                data: newData
            }
        }) 
    }

    onToggleProp = (id, prop, value) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }
    onChangeSalary = (id, newCurr) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, salary: newCurr.match(/\d+/g).join('')}
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })

    }
    onSearchUpdater = (term) => {
        this.setState({term})
    }

    forPromotion = (items, filter) => {
        switch(filter) {
            case 'increase':
                return items.filter(item => item.increase === true);
            case 'more1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }
    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state
        const employees = data.length
        const increased = data.filter(item => item.increase).length
        const visibleData = this.forPromotion(this.searchEmp(data, term), filter) 

        return (
            <div className='app'>
                <AppInfo employees = {employees}
                         increased = {increased}/>
                <div className="box">
                    <AppSearch onSearchUpdater = {this.onSearchUpdater}/>
                    <AppFilter  data = {visibleData}
                                forPromotion = {this.forPromotion}
                                onFilterSelect = {this.onFilterSelect}
                                filter = {filter}/>
                </div>
                <AppList data = {visibleData}
                         onDelete = {this.onDelete}
                         onToggleProp = {this.onToggleProp}
                         onChangeSalary = {this.onChangeSalary}
                         />
                <AddEmployees onAdd = {this.onAdd}/>
            </div>
        )
    }
}

export default App;