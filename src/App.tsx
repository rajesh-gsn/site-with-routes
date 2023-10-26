import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { HomeComponent } from './Home';
import { AboutComponent } from './About';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className='App-logo'
          alt='logo'
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <BrowserRouter basename='/site-with-routes'>
        <Routes>
            <Route path='/' element={<HomeComponent />} />
            <Route path='/about' element={<AboutComponent />} />
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
