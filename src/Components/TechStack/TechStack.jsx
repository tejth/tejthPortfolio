import React, { useState } from "react";
import "./TechStack.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
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
      name: "SQLite3",
    },
    {
      name: "Firebase",
    },
    {
      name: "NodeJs",
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

  const [showMoreTechStack, setShowMoreTechStack] = useState(12);
  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };
  return (
    <>
      <div className="container techstack-section" id="techi">
        <div className="section-title">
          <h5>Tech Stack</h5>
          <span className="line tech-stack-line"></span>
        </div>

        <div className="row">
          {data.slice(0, showMoreTechStack).map((item, index) => (
            <Fade right>
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-12 "
                key={index}
              >
                <div
                  className={
                    index == 0
                      ? "tech-content-marked tech-content"
                      : "tech-content"
                  }
                >
                  <span
                    className="tech-number"
                    style={{ backgroundColor: colors[index] }}
                  >
                    {index + 1}
                  </span>
                  <p>{item.name}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {showMoreTechStack >= data.length ? null : (
          <Zoom>
            <span className="load-more-tech-stack" onClick={loadMore}>
              Load More
            </span>
          </Zoom>
        )}
      </div>
    </>
  );
}

export default TechStack;
