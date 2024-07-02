import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Project from "./Components/Projects/Project";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Education from "./Components/Education/Education";
import Notes from "./Components/Notes/Notes";
function App() {
  return (
    <>
      <Sidebar />
      <About />
      <TechStack />
      <Project />
      <WorkExperience />
      <Education />
      <Notes />
    </>
  );
}

export default App;
