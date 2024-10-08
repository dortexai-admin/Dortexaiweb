import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import "./index.css";
import About from "./components/About/About";
import Tech from "./components/TechStack/TechStack";
import Services from "./components/Services/Services";
import Location from "./components/Location/Location";
import ConnectForm from "./components/ConnectForm/ConnectForm";
import LazyLoad from "./components/LazyLoading/Lazyloading";
import Projects from "./components/Projects/Projects";
import Footr from "./components/Footer/Footer";
import video1 from './assets/video1.mp4';

const App = () => {
  return (
    <>
      <header className="header">
            <video autoPlay muted loop className="video-background">
                <source src={video1} type="video/mp4" />
            </video>
            <div className="head-cont">
                <Navbar />
                <Banner />
            </div>
        </header>
      <main>
        <section className="About" id="About">
            <About />
        </section>
        <section className="Tech">
          <Tech />
        </section>
        <section className="services" id="Services">
          <Services /> 
        </section>
        <section id="Projects">
         <Projects/>
        </section>
        <section id="Contact">
          <Location />
        </section>
        <section className="Contact-frm">
          <ConnectForm />
        </section>
      </main>
      <footer>
        <Footr/>
      </footer>
    </>
  );
};

export default App;
