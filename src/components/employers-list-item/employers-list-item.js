
import './employers-list-item.css';

function EmployersListItem(props) {

    const {name, salary, onToggleProps, onDelete, increase, rise} = props;

    let classNames = 'list-group-item d-flex justify-content-between';
    
    if(increase) {
        classNames += ' increase';
    }
    if(rise) {
        classNames += ' like';
    }


    return (
        
        <div className={classNames}>
        <span style={{fontSize: 25}} className="list-group-item-label"  onClick={onToggleProps} data-toggle='rise'>{name}</span>
        <input style={{fontSize: 25}} type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
        <div className='d-flex justify-content-center align-items-center'>
            <button type="button"
                data-toggle='increase'
                className="btn-cookie btn-sm "
                onClick={onToggleProps}>
                <i className="fas fa-cookie"></i>
            </button>
            <button type="button"
                            onClick={onDelete}
                            className="btn-trash btn-sm ">
                <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
        </div>
    </div>
    )
    }


export default EmployersListItem;


