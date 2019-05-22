import React,{Component} from 'react';
import searchAlgos from './search.js'
import './App.css';
import TextBox from './textBox.js'

export default class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <TextBox/>
      </header>
     
    </div>
  );
  }
}

