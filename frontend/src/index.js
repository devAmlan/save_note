import React,{useContext} from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import App from './App';
import {AuthProvider,AuthContext} from "./context/Authcontext"

ReactDOM.render(
  <React.StrictMode>
  <AuthProvider>
  <App/>
  </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

