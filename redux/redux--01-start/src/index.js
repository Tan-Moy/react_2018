import React from 'react';
import ReactDOM from 'react-dom';

// since redux needs to start before the app  this is a good place to set up our store
import {createStore} from 'redux';
import reducer from './store/reducer'
import {Provider} from 'react-redux'; //we need this to make react aware of redux

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



const store = createStore(reducer);
// console.log(store)



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


