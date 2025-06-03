import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { AuthProvider } from './AuthContext';

const basename = import.meta.env.MODE === 'production' ? '/my-website' : '/';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
