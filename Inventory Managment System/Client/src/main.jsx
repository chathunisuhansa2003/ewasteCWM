import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Sidebar from './components/Sidebar';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="app-shell">
        <Sidebar />
        <main className="app-content">
          <App />
        </main>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
