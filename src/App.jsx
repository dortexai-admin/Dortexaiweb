import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About/About";
import Tech from "./components/TechStack/TechStack";
import Services from "./components/Services/Services";
import Location from "./components/Location/Location";
import ConnectForm from "./components/ConnectForm/ConnectForm";
import Projects from "./components/Projects/Projects";
import Footr from "./components/Footer/Footer";
import DortexAiLab from "./components/DortexAiLab/DortexAiLab";  // Importing the new component
import video1 from './assets/video1.mp4';
import "./index.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Career from "./components/Careers/Careers";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Website */}
        <Route
          path="/"
          element={
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
                  <Projects />
                </section>
                <section id="Contact">
                  <Location />
                </section>
                <section className="Contact-frm p-5">
                  <ConnectForm />
                </section>
              </main>
              <footer>
                <Footr />
              </footer>
            </>
          }
        />

        {/* DortexAiLab Page */}
        <Route path="/dortexailab" element={<DortexAiLab />} />

        {/* About Us Page */}
        <Route path="/aboutus" element={<AboutUs/>} />

        {/* Career Page */}
        <Route path="/careers" element={<Career/>} />
      </Routes>
    </Router>
  );
};

export default App;
