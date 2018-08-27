import React, { Component } from 'react';
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
             alert('Item was created.')
         }
    };
    render =()=>{
        return (
            <form onSubmit={this.formHandler} className="addItemForm">
                <input type="text" className="addItemForm--inputForm" placeholder="New item title.." value={this.state.inputValue} onChange={this.handleChange.bind(this)}/>
                <button type="submit" className="addItemForm--submit">&gt;</button>
            </form>
        )
    }
}
