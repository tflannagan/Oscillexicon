
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from "./components/Header";
import Passage from './components/Passage';
import BannerTop from './components/BannerTop';
import BannerBottom from './components/BannerBottom';
import Info from './components/Info';
import Body from './components/Body';
import BannerFooter from './components/BannerFooter';


function App() {
  return (
    <>
    
    <Header />
    <Passage />
    <BannerTop />
    <Body />
    <BannerBottom />
    <Info />
    <Footer />
    <BannerFooter />
    
    </>
  );
}

export default App;
