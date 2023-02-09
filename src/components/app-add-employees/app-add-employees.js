import { Component } from 'react'
import './app-add-employees.css'

class AddEmployees extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }
    
    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })    
    }

    render() {
        const {name, salary} = this.state

        return (
            <div className="box last">
                <h2>Додайте нового співробітника</h2>
                <form action="submit" className='add-emp'>
                    <input type="text" 
                            placeholder="Ім'я" 
                            name='name'
                            value={name}
                            onChange= {this.onChangeInput} />
                    <input type="number" 
                            placeholder='З/П в $' 
                            name='salary'
                            value={salary}
                            onChange= {this.onChangeInput} />
                    <button type='submit' className='btn send'>Додати</button>
                </form>
            </div>
        )
    }
}
export default AddEmployees