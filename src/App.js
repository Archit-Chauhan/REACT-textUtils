import Header from './Components/Header';
import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import About from './Components/About';
import React from "react";
import { Route, Routes } from 'react-router-dom';
function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={[<Header key={"home"}/>,<Body key="body"/>,<Footer key="footer"/>]}/>
      <Route path="/link" element={[<Header key={"home"}/>,<About key='About'/>,<Footer key="footer"/>]}/>
    </Routes>
    </>
  );
}

export default App;
