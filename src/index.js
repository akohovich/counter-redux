import { createStore } from 'redux';
import { dec, inc, rnd } from './actions';
import reducer from './reducer';

const store = createStore(reducer);

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});

document.getElementById('rnd').addEventListener('click', () => {
  const payload = Math.floor(Math.random() * 10);
  store.dispatch(rnd(payload));
});

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
});

const updateCounter = () => {
  document.getElementById('counter').innerHTML = store.getState();
}

store.subscribe(updateCounter);
