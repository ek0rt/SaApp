import './app-filter.css';

function AppFilter(props) {
    const buttonsGroup = [
        {name: 'all', label: 'Все сотрудники', colored: false,},
        {name: 'rise', label: 'На повышение', colored: false,},
        {name: 'more1000', label: 'ЗП больше 1000$', colored: false,},
    ]


    const btns = buttonsGroup.map(({name, label, colored}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        const styles = colored ? {background: 'purple', color: 'yellow'} : null
        
        return (
            <button type='button'
            onClick={() => props.onFilter(name)}
                style={styles}
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