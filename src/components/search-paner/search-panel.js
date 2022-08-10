import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            term: '',
        }
    }


    onValueChange = (e) => {
        let term = e.target.value 
        this.setState({
           term
        }, () => this.props.sendTerm(term))
    }


    render() {
        return (
            <input 
            type="text"
            name='term'
            value={this.state.term}
            onChange={this.onValueChange}
            className= 'form-control search-input'
            placeholder='Найти сотрудника'
            />
        )
    }
   
}

export default SearchPanel;