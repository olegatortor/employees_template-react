import './app-add-employees.css'

function AddEmployees() {
    return (
        <div className="box last">
            <h2>Додайте нового співробітника</h2>
            <form action="submit" className='add-emp'>
                <input type="text" placeholder="Ім'я"/>
                <input type="number" placeholder='З/П в $'/>
                <button type='submit' className='btn send'>Додати</button>
            </form>
        </div>
    )
}
export default AddEmployees