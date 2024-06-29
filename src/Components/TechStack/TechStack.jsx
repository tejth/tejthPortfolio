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

  const colors = [
    "#0088FE",
    "#48088A",
    "#8181F7",
    "#FE2EF7",
    "#585858",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
    "#3498DB ",
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
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 " key={index}>
              <div className="tech-content">
                <span
                  className="tech-number"
                  style={{ backgroundColor: colors[index] }}
                >
                  {index + 1}
                </span>
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
