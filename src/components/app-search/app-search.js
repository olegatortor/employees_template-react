import { Component } from 'react'
import './app-search.scss'

class AppSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }
    onSearchUpdater = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.onSearchUpdater(term)
    }
    
    render() {
        return (
            <input  type="text"
                    placeholder='Знайти співробітника' 
                    className='app-search'
                    onChange={this.onSearchUpdater}/>
        )
    }
}

export default AppSearch