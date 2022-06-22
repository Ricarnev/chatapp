import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from './pages/chat/chat';
import Header from './components/header/header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
