import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class AddItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: ""
        }
    }
    handleChange =(event)=> {
        this.setState({
            inputValue: event.target.value
        })
    }
    formHandler =(e)=> {
         e.preventDefault();
         const updItems = this.props.items.slice();
         if(this.state.inputValue.length === 0){
             alert("Please, write a title name")
         }
         else {
             const newItem = {name: this.state.inputValue, comments: []};
             updItems.push(newItem);
             this.props.addItem(updItems);
             this.setState({
                 inputValue: ""
             });
             alert('Topic was created was created.')
         }
    };
    render =()=>{
        return (
            <div className="form">
                <form onSubmit={this.formHandler} className="addItemForm">
                    <input type="text" className="addItemForm--inputForm" placeholder="New topic title.." value={this.state.inputValue} onChange={this.handleChange.bind(this)}/>
                    <button type="submit" className="addItemForm--submit">Create topic</button>
                    <Link to="/"><button className="go-back">Go to the main page</button></Link>
                </form>
            </div>
        )
    }
}
