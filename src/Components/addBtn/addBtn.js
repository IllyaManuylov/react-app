import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class AddBtn extends Component {
    render =()=>{
        return (
            <Link to="./newItem" className="link"><button type="button" className="addBtn">+</button></Link>
        )
    }
}

