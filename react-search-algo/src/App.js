

import React,{Component} from 'react';
import searchAlgos from './search.js'
import './App.css';
import Data from './data'
import BinarySearchTree from './BinarySearchTree'
import BookSearch from './bookSearch.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data:Data.split(' '),
      sortedData:Data.split(' ').map(i => Number(i)).sort(function(a, b){return a-b}),
    };
  }


  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // searchAlgos.linearSearch(this.state.data, this.state.value)
    searchAlgos.binarySearch()
  }



  render(){
 console.log(this.state.sortedData)
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
      <div className='bookSearch'>
     <BookSearch />

      </div>
    </div>
  );
  }
}

