import React from 'react';
import './homePage/style/main.scss';
import MyNav from "./homePage/MyNav";
import Home from "./homePage/Home";
import Users from "./homePage/Users";
import Choice from "./homePage/Choice";
import Check from "./homePage/Check";
import Portfolio from "./homePage/Portfolio";
import Footer from "./homePage/Footer";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Home />
      <Users /> 
      <Choice />
      <Check />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
