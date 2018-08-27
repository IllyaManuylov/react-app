import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ActiveHeader from '../Components/activeHeader';
import AddItem from '../Components/addItem';
import * as actions from '../actions/index.js';

class NewItemPage extends Component {
    render() {
        const {addItem} = this.props.pageActions;
        const {items} = this.props;
        let currItem = this.props.match.params.currentItem;
        return (
            <div className="App">
                <ActiveHeader headerTitle="Create new Topic"/>
                <AddItem addItem = {addItem} items = {items}/>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        items: state.items,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(actions, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewItemPage)


