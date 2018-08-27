import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ActiveHeader from '../Components/activeHeader';
import AddComment from '../Components/commentForm';
import Comment from '../Components/comment';
import * as actions from '../actions/index.js';


class CommentPage extends Component {
    render() {
        const {addComment} = this.props.pageActions;
        let {items, comments} = this.props;
        let currItem = this.props.match.params.currentItem;
        return (

            <div>
                <ActiveHeader headerTitle={`Topic ${items[currItem].name}`}/>
                <Comment items = {items} comments = {comments} currItem = {currItem}/>
                <AddComment addComment = {addComment} items = {items} comments = {comments} currItem = {currItem} />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        items: state.items,
        comments: state.comments
    }
}
function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(actions, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentPage)


