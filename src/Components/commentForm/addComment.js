import React, { Component } from 'react';
import './style.css';

export default class AddComment extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: ""
        }
        this.render = this.render.bind(this);
    }
    handleChange =(event)=> {
        this.setState({
            inputValue: event.target.value
        })
    }
    handler =(e)=> {
        e.preventDefault();
        let updItems = this.props.items.slice();
        let commentsArray = this.props.comments.slice();
        let newComment = this.state.inputValue;
        if(newComment.length === 0){
            alert("Please, write a comment");
        }
        else{
        updItems[this.props.currItem].comments.push(newComment);
        this.props.addComment(updItems, commentsArray);
        this.setState({
            inputValue: ""
        });
        }
    };
    render=()=>{
        return (
            <form  onSubmit={this.handler} className="commentForm">
                <input type="text" className="commentForm--input" placeholder="New comment goes here.." value={this.state.inputValue} onChange={this.handleChange.bind(this)}/>
                <button type="submit" className="commentForm--submit">&gt;</button>
            </form>
        )
    }
}
