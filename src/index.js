import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { dec, inc, rnd } from './actions';
import reducer from './reducer';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import App from './components/App';

const store = createStore(reducer);

// document.getElementById('dec').addEventListener('click', () => {
//   store.dispatch(dec());
// });

// document.getElementById('rnd').addEventListener('click', () => {
//   const payload = Math.floor(Math.random() * 10);
//   store.dispatch(rnd(payload));
// });

// document.getElementById('inc').addEventListener('click', () => {
//   store.dispatch(inc());
// });

// const updateCounter = () => {
//   ReactDOM.render(
//     <Counter 
//       counter={store.getState()}
//       inc={() => {store.dispatch(inc())}}
//       dec={() => {store.dispatch(dec())}}
//       rnd={() => {store.dispatch(rnd(Math.floor(Math.random() * 10)))}}
//     />, document.getElementById('root'));
// }


// updateCounter();

// store.subscribe(updateCounter);

  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root'));




