import React from 'react';
import './App.css';
import Header from './components/header/header';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='headerContainer'>
        <Header />
      </div>
      <div className='content'>
        <h1>Добро пожаловать на мой пет-проект Chatify</h1>
        <p>Он создан с использованием Typescript, Effector и React</p>
        <p>Код Typescript был написан с практически нулевыми знаниями в нём. В помощь были лишь мои знания в C#</p>
        <p>Данный проект работает полностью с локальным стором, поэтому при перезагрузке все значения вернутся в начальное состояние</p>
        <p>В основном этот проект был создан для освоения Typescript. Если у вас есть идеи для поправки и оптимизации кода, буду рад вашим предложениям</p>
        <Link to='/chat'
          className='linkToChat'>
          Перейти в чат
        </Link>
      </div>
    </div>
  );
}

export default App;
