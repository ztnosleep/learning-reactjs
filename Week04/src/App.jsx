import { useState, useEffect } from 'react';  
import './App.css';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Body from './components/Body.jsx';
import Footer from './components/footer.jsx';

function App() {
  

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Body></Body>
      <Footer></Footer>
    </>
  );
}

export default App;