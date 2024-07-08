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

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // Simulate a loading delay (e.g., fetch data, load resources)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {loading ? (
        <div id="loading-screen">
          <img
            src="https://aster.ng/wp-content/uploads/2019/12/186124-full_ajax-loading-gif-transparent-background-0425.gif"
            alt="loading..."
          />
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
