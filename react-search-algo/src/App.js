import React,{Component} from 'react';
import searchAlgos from './search.js'
import './App.css';
import Data from './data'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data:Data.split(' '),
      sortedDate:Data.split(' ').map(i => Number(i)).sort(),
    };
  }


  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
  
    event.preventDefault();
    searchAlgos.linearSearch(this.state.data, this.state.value)



  }

  render(){
 
  return (
    <div className="App">
      <header className="App-header">
      <div>
      <form onSubmit={this.handleSubmit}>
          <label>
            Data:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      </header>
     
    </div>
  );
  }
}

