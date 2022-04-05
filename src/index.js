import './index.css';
import state, { observer } from './redux/state'
import React from 'react';
import './index.css';
import App from './App';
import { addPost } from './redux/state';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);


export let rerender = (state) => {
  root.render(<App state={state} addPost={addPost} />);
}
rerender(state);
observer(rerender);

