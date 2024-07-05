import React, { createContext, useState } from "react";
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

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div id={theme}>
        <NavbarMobileView />
        <Sidebar changeTheme={changeTheme} theme={theme} />
        <About />
        <TechStack />
        <Project />
        <WorkExperience />
        <Education />
        <Notes />
        <Contact />
      </div>

      <ScrollToTop
        smooth={true}
        color="white"
        height="20"
        width="20"
        top="30"
        style={{ borderRadius: "90px", backgroundColor: "#38004c" }}
      />
    </ThemeContext.Provider>
  );
}

export default App;
