import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WelcomeSection from "../components/WelcomeSection";
import MissionSection from "../components/MissionSection";
import DifferentiatorsSection from "../components/Differentiators";
import InfrastructureSection from "../components/Infrastructure";
import GetStartedSection from "../components/GetStartedSection";


const About = () => {
    return (
       <>
         <Navbar />
         <WelcomeSection />
         <MissionSection />
         <DifferentiatorsSection />
         <InfrastructureSection />
         <GetStartedSection />
         <Footer />
       </> 
    );
};


export default About;