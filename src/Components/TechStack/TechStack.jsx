import React from "react";
import "./TechStack.css";

function TechStack() {
  const data = [
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "Bootstrap",
    },
    {
      name: "TailWind CSS",
    },
    {
      name: "JavaScript",
    },
    {
      name: "ReactJS",
    },
    {
      name: "Redux",
    },
    {
      name: "Zustand",
    },
    {
      name: "GIT",
    },
    {
      name: "Python",
    },
    {
      name: "Numpy",
    },
    {
      name: "Pandas",
    },
    {
      name: "Turtle",
    },
    {
      name: "Sqlite3",
    },
    {
      name: "Firebase",
    },
    {
      name: "Django",
    },
    {
      name: "C++",
    },
  ];
  return (
    <>
      <div className="container techstack-section">
        <div className="section-title">
          <h5>Tech Stack</h5>
          <span className="line tech-stack-line"></span>
        </div>

        <div className="row">
          {data.map((item, index) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="tech-content">
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TechStack;
