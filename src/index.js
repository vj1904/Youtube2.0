import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-jig4jzocqhpwgz5g.us.auth0.com"
    clientId="YbcTYl06lWF4zWzaHQZmgloXcFpvXqnG"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);

root.render(<App />);
