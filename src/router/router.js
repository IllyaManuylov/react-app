import MainPage from '../Containers/MainPage';
import NewItemPage from '../Containers/NewItemPage';
import CommentPage from '../Containers/Comments';
import { Switch, Route } from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import React from 'react';
const Application = () => (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route path='/newItem' component={NewItemPage}/>
            <Route path='/comments/:currentItem' component={CommentPage}/>
        </Switch>
    </HashRouter>
);
export default Application;
