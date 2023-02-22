import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authentication from './pages/Authentication/Authentication';
import Database from './pages/Database/Database';
import Storage from './pages/Storage/Storage';
import Hosting from './pages/Hosting/Hosting';
import Functions from './pages/Functions/Functions';
import MachineLearning from './pages/MachineLearning/MachineLearning';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='authentication' element={<Authentication/>} />
          <Route path='database' element={<Database/>} />
          <Route path='storage' element={<Storage/>} />
          <Route path='hosting' element={<Hosting/>} />
          <Route path='functions' element={<Functions/>} />
          <Route path='machine-learning' element={<MachineLearning/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
