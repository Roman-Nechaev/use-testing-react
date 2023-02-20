import React from 'react';
import ReactDOM from 'react-dom/client';

// import { App } from 'components/App';

import { Container } from './components/App/App.styled';
import { App } from './components/App/App.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>
);
