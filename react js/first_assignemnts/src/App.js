import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../src/assest/main.css';
import Home from  '../src/component/Home'
import Header from  '../src/common/Header'
import Footer from  '../src/common/Footer'
function App() {
  return (
    <div className="App">
      <Header/>
     <Home />
     <Footer/>
    </div>
  );
}

export default App;
