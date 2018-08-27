import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class Item extends Component {
    remove = (e, i) => {
        e.stopPropagation();
        const updItems = this.props.items.slice();
        updItems.splice(i, 1)
        this.props.removeItem(updItems);
    }
    render =()=>{
        return (
            <section>
            <ul className="itemsList">
                {this.props.items.map((item, i) =>
                    <li key={i} className="item">
                        <article className= "category">
                                <Link to= {`./comments/${i}`}><span className="categoryTitle">{item.name}</span></Link>
                                <span className="itemsList--commentsAmount">{item.comments.length}</span>
                                <button type="button" className="itemsList--deleteItem" onClick={(e) => this.remove(e, i)}>Delete</button>
                        </article>
                    </li>
                )}
            </ul>
            </section>
        )
    }
}
