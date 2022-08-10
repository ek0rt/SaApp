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
                {name:  'John', salary: 199, increase: true,rise: true, id: 1 },
                {name:  'Alex', salary: 300, increase: true, rise: false, id: 2 },
                {name:  'Katya', salary: 1100, increase: false, rise: false, id: 3 },
            ],
            term: '',
            filter: 'all',
        }
        this.maxId = 4;
    }

    // componentDidMount() {
    //     const storage = JSON.parse(localStorage.getItem('keys'))
    //     if(storage) {
    //         this.setState({data: storage});
    //     }
    // }

 
    onDelete = (id) =>  {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }), () => localStorage.setItem('keys', JSON.stringify(this.state.data)))
    }

   
  onToggleProps = (id, props) => {
    this.setState(({data}) => ({
        data: data.map(item => {
            if(item.id === id) {
                return {...item, [props]: !item[props]}
            } 
            return item
        }) 

    })
  )}

    onAdd = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++,
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        }, () => localStorage.setItem('keys', JSON.stringify(this.state.data)))
    }


    sendTerm = (term) => {
        this.setState({term})
    }

    filterEmp = (items, term) => {
        return items.filter(item => {
           return item.name.indexOf(term) > -1;
        })
    }


    buttonsFilter = (items, filter) => {
        switch(filter) {
            case 'rise':
                return items.filter(item => item.rise)
            case 'more1000':
                return items.filter(item => item.salary > 1000)
            default:
                return items;
        }
    }

    onFilter = (filter) => {
        this.setState({
            filter
        })
    }

 
    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibility =  this.buttonsFilter(this.filterEmp(data, term), filter) 

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}></AppInfo>
                <div className="search-panel">
                    <SearchPanel sendTerm={this.sendTerm}/>
                    <AppFilter filter={filter} onFilter={this.onFilter}/>
                </div>
                    <EmployersList 
                        onToggleProps={this.onToggleProps}
                        onDelete={this.onDelete}
                        data={visibility}
                        />
                    <EmployersAddForm 
                        onAdd={this.onAdd}
                    />
            </div>
            
        );
    }
};



export default App;