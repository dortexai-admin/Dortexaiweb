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
// import DortexAiLab from "./components/DortexAiLab/DortexAiLab"; // Importing the new component
import video1 from "./assets/video1.mp4";
import "./index.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Career from "./components/Careers/Careers";
import InternshipAndTraining from "./components/IntershipAndTraining/InternshipAndTraining";
import Contactus from "./components/Contactus/Contactus";
import MyCarousel from "./components/carousel/MyCarousel";
//image  CT University

import Ct1 from "./assets/CT/ct1.jpg";
import Ct2 from "./assets/CT/ct2.jpg";
import Ct3 from "./assets/CT/ct3.jpg";
import Ct4 from "./assets/CT/ct4.jpg";
import PartnershipMessage from "./NavComp/PartnershipMessage";

// import Ourservices from "./components/Ourservices/Ourservices";
// import ServiceForm from "./ServiceForm/ServiceForm";

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
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    className="video-background"
                                >
                                    <source src={video1} type="video/mp4" />
                                </video>
                                <div className="head-cont">
                                    <Navbar />
                                    <Banner />
                                </div>
                            </header>
                            <main>
                                <div>
                                    <MyCarousel images={[Ct1, Ct2, Ct3, Ct4]} />
									<PartnershipMessage/>
                                </div>
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
                                <section id="Contactus">
                                    <Location />
                                </section>
                                {/* <section className="Contact-frm">
									<ConnectForm />
								</section> */}
                            </main>
                            <footer>
                                <Footr />
                            </footer>
                        </>
                    }
                />

                {/* DortexAiLab Page */}
                {/* <Route path="/dortexailab" element={<DortexAiLab />} /> */}

                {/* About Us Page */}
                <Route path="/aboutus" element={<AboutUs />} />

                {/* Career Page */}
                <Route path="/career" element={<Career />} />

                {/* Intership page*/}
                <Route
                    path="/internshipandtraining"
                    element={<InternshipAndTraining />}
                />

                {/*contact*/}
                <Route path="/contact" element={<Contactus />} />
                {/* <Route path="/ServiceForm" element={<ServiceForm/>}/> */}
                {/*ourservices*/}
                {/* <Route path="/ourservices" element={<Ourservices />}/> */}
            </Routes>
        </Router>
    );
};

export default App;
