import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import Application from './router/router';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {todos} from './reducer';
import {loadState, saveState} from './localStorage'

const persistedState = loadState();
const store = createStore(todos, persistedState);
store.subscribe(() => {
    saveState((store.getState()))
})

ReactDOM.render(
    <Provider store={store}>
        <Application />
     </Provider>
    , document.getElementById('root'));
registerServiceWorker();
