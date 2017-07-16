import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import {voteReducer, todoReducer} from './reducers'
import Results from './results'

// not sure what is `registerServiceWorker` for???
import registerServiceWorker from './registerServiceWorker';

const middleware = composeWithDevTools(applyMiddleware(thunk, promise()));


const reducers = combineReducers({
    votes: voteReducer,
    todos: todoReducer
})
let store = createStore(reducers, middleware);

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <div className="container">
                <App/>
                <hr/>
                <Results/>
            </div>
        </Provider>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();