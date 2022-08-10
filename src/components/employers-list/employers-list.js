import EmployersListItem from "../employers-list-item/employers-list-item"
import './employers-list.css';



const EmployersList = ({data, onDelete, onToggleProps}) => {

    const elements = data.map(item => {
        
        const {id, ...itemi} = item

        return (
            <EmployersListItem 
            key={id}    
            {...itemi}
            onDelete={() => onDelete(id)}
            onToggleProps={(e) => onToggleProps(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}



export default EmployersList;