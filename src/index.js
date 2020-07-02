import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./font-awesome/css/font-awesome.css";
import "./font-awesome/font/FontAwesome.otf";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
