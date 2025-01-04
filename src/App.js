import './App.css';
import React from 'react';
import One from './One';
import Content from './Content';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
// Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<One />} />
          <Route path='/features' element={<Content />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
