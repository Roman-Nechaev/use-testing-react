import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';

import { Container } from './components/App/App.styled';
import { App } from './components/App/App.jsx';
import { theme } from './constants';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Container>
        <App />
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);
