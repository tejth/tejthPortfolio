import React, { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";
import Zoom from "react-reveal/Zoom";

function ProjectList({ name, des, projectlink, techused, sourcelink }) {
  const [show, setShow] = useState(false);
  const colors = [
    "rgba(20,201,148,255)",
    "rgb(37, 150, 190)",
    "#FF8042",
    "rgba(235,118,98,255)",
    "#FF6347",
    "#FF1042",
  ];

  const handleShowandCollapse = () => {
    setShow(!show);
  };

  // Array of project names that should show the Live Demo button
  const projectsWithLiveDemo = [
    "Alexa A.I",
    "PortFolio",
    "Google Clone",
    "Codepen Clone",
    "Todo List app",
    "CurrencyConvertor",
    "Drawing WebApp",
  ];

  const showLiveDemoButton = projectsWithLiveDemo.includes(name);

  return (
    <>
      <Zoom>
        <div
          className={
            show ? "project-list-opened project-list " : "project-list"
          }
          onClick={handleShowandCollapse}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <div className="title-and-collapse-option">
            <h5>{name}</h5>
            <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
          </div>

          <div className="description">
            {show ? (
              <ul>
                {des.split("\n").map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>
                {des.substring(0, 50)}...
                <p style={{ color: "green" }}>Read More</p>
              </p>
            )}
          </div>

          <div className="row">
            {techused &&
              techused.map((tech, index) => (
                <div
                  className="col-xl-3 col-lg-3 col-md-6 col-sm-12"
                  key={index}
                >
                  <div className="tech-used-in-project">
                    <p style={{ backgroundColor: colors[index] }}>
                      {tech.techname}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          <div className="button-container">
            <div className="project-button">
              {showLiveDemoButton && (
                <a className="live-demo-button" target="_" href={projectlink}>
                  Live Demo
                </a>
              )}
              <a className="source-code-button" target="_" href={sourcelink}>
                Source Code
              </a>
            </div>
          </div>
        </div>
      </Zoom>
    </>
  );
}

export default ProjectList;
