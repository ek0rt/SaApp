import './app-filter.css';

 function AppFilter(props) {
    const buttonsGroup = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'more1000', label: 'ЗП больше 1000$'},
    ];

    const buttons = buttonsGroup.map(({name, label}) => {

        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
        <button 
        onClick={() => props.onFilter(name)}
            key={name}
            className={`btn ${clazz}`}
            type='button'>
            {label}
        </button>
        )
    })
    

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}



export default AppFilter;