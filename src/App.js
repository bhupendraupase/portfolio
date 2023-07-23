import React from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
// import { motion } from 'framer-motion';
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";


function App() {
  useEffect(() => {
    // motion.init();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
