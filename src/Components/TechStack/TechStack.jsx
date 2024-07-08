import React, { useState } from "react";
import "./TechStack.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function TechStack() {
  const data = [
    { name: "HTML", pdf: "/pdfs/html.pdf" },
    { name: "CSS", pdf: "/pdfs/css.pdf" },
    { name: "Bootstrap", pdf: "/pdfs/bootstrap.pdf" },
    { name: "TailWind CSS", pdf: "https://tailwind.build/classes" },
    { name: "JavaScript", pdf: "/pdfs/javascript.pdf" },
    { name: "ReactJS", pdf: "/pdfs/reactjs.pdf" },
    { name: "Redux", pdf: "/pdfs/redux.pdf" },
    { name: "Zustand", pdf: "/pdfs/zustand.pdf" },
    { name: "GIT", pdf: "/pdfs/git.pdf" },
    { name: "Python", pdf: "https://github.com/tejth/Python" },
    { name: "Numpy", pdf: "https://github.com/tejth/Python" },
    { name: "Pandas", pdf: "https://github.com/tejth/Python" },
    { name: "Turtle", pdf: "/pdfs/turtle.pdf" },
    { name: "SQLite3", pdf: "https://docs.python.org/3/library/sqlite3.html" },
    { name: "Firebase", pdf: "/pdfs/firebase.pdf" },
    { name: "NodeJs", pdf: "/pdfs/nodejs.pdf" },
    { name: "C++", pdf: "/pdfs/cpp.pdf" },
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

  const handleDownload = (pdf) => {
    const isExternal = pdf.startsWith("http");
    if (isExternal) {
      window.open(pdf, "_blank");
    } else {
      const link = document.createElement("a");
      link.href = pdf;
      link.download = pdf.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
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
            <Fade right key={index}>
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                onClick={() => handleDownload(item.pdf)}
              >
                <div
                  className={
                    index === 0
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
