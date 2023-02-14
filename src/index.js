import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
// import { App } from 'components/App';
// import { Product } from 'components/hello';
import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//     <Product />
//   </React.StrictMode>
// );

// const elm1 = React.createElement('span', { children: 'Привет' });
const elm1 = <span>Привет</span>;
// const elm2 = React.createElement('span', { children: 'Мир' });
const elm2 = <span>Мир</span>;

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: [elm1, elm2],
// });

const jsxElement = (
  <div>
    {elm1} {elm2}
  </div>
);
console.log(jsxElement);
ReactDOM.render(jsxElement, document.querySelector('#root'));
