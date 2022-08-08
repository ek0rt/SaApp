import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
        }
    }

    onUpdateSearch = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        }, () => this.props.onUpdateSearch(this.state.term))
        
    }

   
    render() {
        return (
            <input 
            type="text"
            name='term'
            className= 'form-control search-input'
            placeholder='Найти сотрудника'
            value={this.state.term}
            onChange={this.onUpdateSearch}
            />
        )
    }
   
}

export default SearchPanel;