import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);



let rerender = (state) => {
  root.render(
    <BrowserRouter>
      <App state={state} store={store} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>
  );
}

rerender(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerender(state);
});

