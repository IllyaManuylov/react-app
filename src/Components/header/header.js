import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    render =()=>{
        return (
            <header className="header">
                <h1 className="header--title">Sayer</h1>
                <span>World's most used time waster</span>
            </header>
        )
    }
}

