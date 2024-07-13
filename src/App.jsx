import React, { createContext, useState, useEffect } from "react";
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
import Hobbies from "./Components/Hobbies/Hobbies";
import Certificate from "./Components/Certificates/Certificate";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // Change body background color when loading
    document.body.style.backgroundColor = "#172027";

    // Simulate a loading delay (e.g., fetch data, load resources)
    const timer = setTimeout(() => {
      setLoading(false);
      // Revert body background color after loading
      document.body.style.backgroundColor = "";
    }, 2000); // 2 seconds

    return () => {
      clearTimeout(timer);
      document.body.style.backgroundColor = "#172027"; // Cleanup the background color on unmount
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {loading ? (
        <div id="loading-screen">
          <div className="loader">
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
            <span style={{ "--i": 4 }}></span>
            <span style={{ "--i": 5 }}></span>
            <span style={{ "--i": 6 }}></span>
            <span style={{ "--i": 7 }}></span>
          </div>
          <svg className="svvvg">
            <filter id="gooey">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
              <feColorMatrix
                values="
                1 0 0 0 0
                0 1 0 0 0
                1 0 1 0 0
                1 0 0 20 -10
            "
              />
            </filter>
          </svg>
        </div>
      ) : (
        <div id={theme}>
          <NavbarMobileView changeTheme={changeTheme} theme={theme} />
          <Sidebar changeTheme={changeTheme} theme={theme} />
          <About />
          <TechStack />
          <Project />
          <WorkExperience />
          <Education />
          <Notes />
          <Hobbies />
          <Certificate />
          <Contact />
        </div>
      )}
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
