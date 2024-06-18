import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import 'react-loading-skeleton/dist/skeleton.css'
import {BrowserRouter}from "react-router-dom"
import { Auth0Provider } from '@auth0/auth0-react';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Auth0Provider
    domain="dev-eacj8k5wdi0ncard.au.auth0.com"
    clientId="iGO0uroesLvlFvzHN1Sa06L8kOOzHBdk"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <App />
  </Auth0Provider>
);