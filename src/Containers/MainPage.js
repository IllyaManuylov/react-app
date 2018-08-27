import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../Components/header';
import Item from '../Components/item';
import AddBtn from '../Components/addBtn';
import * as actions from '../actions/index.js';


class MainPage extends Component {
  render() {
      const {items} = this.props;
      let currItem = this.props.match.params.currentItem;
      const {removeItem} = this.props.pageActions;
    return (
      <div className="App">
            <Header/>
            <Item items = {items} currItem ={currItem} removeItem = {removeItem}/>
          <AddBtn />
      </div>
    );
  }
}
function mapStateToProps(state) {
    return {
        items: state.items,
        currItem: state.currItem
    }
}
function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(actions, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
