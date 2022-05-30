import React from "react";
import "./App.css";

import Header from './components/Header';
import MainBanner from './components/MainBanner';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <MainBanner />
      <Main />
      <Footer />
    </>
  );
}



export default App;
