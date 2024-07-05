import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Project from "./Components/Projects/Project";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Education from "./Components/Education/Education";
import Notes from "./Components/Notes/Notes";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import NavbarMobileView from "./Components/Sidebar/NavbarMobileView";
function App() {
  return (
    <>
      <NavbarMobileView />
      <Sidebar />
      <About />
      <TechStack />
      <Project />
      <WorkExperience />
      <Education />
      <Notes />
      <Contact />
      <ScrollToTop
        smooth={true}
        color="white"
        height="20"
        width="20"
        top="30"
        style={{ borderRadius: "90px", backgroundColor: "#38004c" }}
      />
    </>
  );
}

export default App;
