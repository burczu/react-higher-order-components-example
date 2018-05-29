import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Connected from './connect/Connected';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root')); // enhance example
ReactDOM.render(<Connected />, document.getElementById('root')); // connect example
registerServiceWorker();
