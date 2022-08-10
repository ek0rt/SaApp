import './app-filter.css';

function AppFilter(props) {
    const buttonsGroup = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'more1000', label: 'ЗП больше 1000$'},
    ]


    const btns = buttonsGroup.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'

        return (
            <button type='button'
            onClick={() => props.onFilter(name)}
                className={`btn ${clazz}`}
                key={name}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {btns}
        </div>
    )
}


export default AppFilter;


// const active = props.filter === name;
// const clazz = active ? 'btn-light' : 'btn-outline-light';