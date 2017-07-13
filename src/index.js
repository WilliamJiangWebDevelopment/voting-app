import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import myApp from './reducers'
import Results from './components/results'

import registerServiceWorker from './registerServiceWorker';

let store = createStore(
    myApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <div className="container">
            <App/>
            <hr/>
            <Results/>
        </div>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();