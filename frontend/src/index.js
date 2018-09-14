import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');
const render = () => ReactDOM.render(<App />, root);

render();

if (module.hot) module.hot.accept('./App', () => render());

registerServiceWorker();
