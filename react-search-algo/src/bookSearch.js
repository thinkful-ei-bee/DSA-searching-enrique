import React from 'react';
import searchAlgos from './search.js'

export default class BookSearch extends React.Component{
   
    constructor(props) {
        super(props);
        this.state = {
          value: '',
          data:'',
        };
      }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        }
    
        handleSubmit = (event) => {
        event.preventDefault();
        // searchAlgos.linearSearch(this.state.data, this.state.value)
       
        }
            
    findBook(num, title){
        
    }
   
   
   
    render(){
        return(
            



            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                  Book-Search:
                  <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
      
            
        )
    }

}