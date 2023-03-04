function AppInfo(props) {

    return (
        <div className="app-info box">
            <h1>Облік співробітників компанії</h1>
            <h2>Загальна кількість співробітників: {props.employees} </h2>
            <h2>Премію отримають: {props.increased}</h2>
        </div>
    )
}

export default AppInfo;