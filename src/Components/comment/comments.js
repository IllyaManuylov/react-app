import React, { Component } from 'react';
import '../comment/style.css';

export default class Comment extends Component {
    render =()=>{
       let data = this.props.items.slice();
        let currentItem = data[this.props.currItem].comments
        return (
            <ul className="commentsList">
                {currentItem.map((item, i) =>
                    <li key={i} className="comment">
                        <section className="commentCover">
                            <div className="avatar"></div>
                            <p className="commentText">{item}</p>
                        </section>
                    </li>
                )}
            </ul>
        )
    }
}