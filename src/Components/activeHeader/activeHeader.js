import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../header/header.css';

export default class ActiveHeader extends Component {
    render =()=>{
        return (
            <header className="header activeHeader">
                <Link to="/" className="header--link"><button className="header--button">&#8592;</button></Link>
                <h1 className="header--title">{this.props.headerTitle}</h1>
            </header>
        )
    }
}

