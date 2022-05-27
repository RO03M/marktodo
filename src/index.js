import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material';
import { DEFAULT_THEME } from './utils/themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider
      theme={DEFAULT_THEME}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
