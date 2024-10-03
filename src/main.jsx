// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOM import 추가
import App from './App';
import './index.css';

// root element를 가져와서 ReactDOM을 사용하여 App 컴포넌트를 렌더링합니다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
