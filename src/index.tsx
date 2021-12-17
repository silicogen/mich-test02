import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider as MobxProvider } from 'mobx-react';
import { Root } from "./store/Root"

const root = Root.create({});

ReactDOM.render(
  <React.StrictMode>
    <MobxProvider root={root}>
      <App />
    </MobxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
