import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App';
import {Auth0Provider} from '@auth0/auth0-react'

const domain = 'dev-tsl00x9w.us.auth0.com'
const client = 'cQVUFOy5sLStfHOKCVMwkUSpKOM4qnBg'

ReactDOM.render(
    <BrowserRouter>
        <Auth0Provider domain={domain} clientId={client} redirectUri={window.location.origin}>
            <App />
        </Auth0Provider>
    </BrowserRouter>,
    document.getElementById('root')
);