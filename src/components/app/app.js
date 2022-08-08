import './app.css';
import { Component } from 'react';
import AppInfo from '../app-info/app-info.js'
import SearchPanel from '../search-paner/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:  [
                {name:  'John', salary: 599, increase: false,rise: true, id: 1 },
                {name:  'Alex', salary: 300, increase: false, rise: false,id: 2 },
                {name:  'Katya', salary: 1100, increase: false, rise: false,id: 3 },
            ],
            term: '',
            filter: 'all',
        }
        this.maxId = 5;
    }

    componentDidMount() {
        const storage = JSON.parse(localStorage.getItem('keys'))
        if(storage) {
            this.setState({data: storage});
        }
    }

    onDelete = (id) =>  {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }), () => localStorage.setItem('keys', JSON.stringify(this.state.data)))
    }

    onAdd = (name, salary) => {
        let newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            let newArr = [...data, newItem];
          return {
            data: newArr
          }
        }, () => localStorage.setItem('keys', JSON.stringify(this.state.data)))
    }
   
    onToggleProps = (id, props) => {
     this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
            return {
               ...item, [props]: !item[props]
            }
        } 
        return item
      })
     }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    } 

    onUpdateSearch = (term) => {
        this.setState({term: term})
    }

    Filter = (items, filter) => {
        if(filter === 'rise') {
            return items.filter(item => item.rise)
        } 
        if(filter === 'more1000') {
            return items.filter(item => item.salary > 1000)
        } return items
    }

    onFilter = (filter) => {
        this.setState({
            filter: filter
        })
    }

 
    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.Filter(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased} ></AppInfo>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onFilter={this.onFilter} filter={filter}/>
                </div>
                    <EmployersList 
                        onToggleProps={this.onToggleProps}
                        onDelete={this.onDelete}
                        data={visibleData}
                        />
                    <EmployersAddForm 
                    onAdd={this.onAdd}
                    />
            </div>
            
        );
    }
};



export default App;