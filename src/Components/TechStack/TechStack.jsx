import React, { useState } from "react";
import "./TechStack.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiRedux, SiNumpy, SiGeopandas, SiMobxstatetree } from "react-icons/si";
import { GiSeaTurtle } from "react-icons/gi";
import { GrMysql } from "react-icons/gr";
import { TbBrandCpp } from "react-icons/tb";

function TechStack() {
  const data = [
    { name: "HTML", pdf: "/pdfs/html.pdf", icon: <FaHtml5 /> },
    { name: "CSS", pdf: "/pdfs/css.pdf", icon: <FaCss3Alt /> },
    { name: "Bootstrap", pdf: "/pdfs/bootstrap.pdf", icon: <FaBootstrap /> },
    {
      name: "TailWind CSS",
      pdf: "https://tailwind.build/classes",
      icon: <RiTailwindCssFill />,
    },
    {
      name: "JavaScript",
      pdf: "/pdfs/javascript.pdf",
      icon: <IoLogoJavascript />,
    },
    { name: "ReactJS", pdf: "/pdfs/reactjs.pdf", icon: <FaReact /> },
    { name: "Redux", pdf: "/pdfs/redux.pdf", icon: <SiRedux /> },
    { name: "Zustand", pdf: "/pdfs/zustand.pdf", icon: <SiMobxstatetree /> },
    { name: "GIT", pdf: "/pdfs/git.pdf", icon: <FaGitAlt /> },
    {
      name: "Python",
      pdf: "https://github.com/tejth/Python",
      icon: <FaPython />,
    },
    {
      name: "Numpy",
      pdf: "https://github.com/tejth/Python",
      icon: <SiNumpy />,
    },
    {
      name: "Pandas",
      pdf: "https://github.com/tejth/Python",
      icon: <SiGeopandas />,
    },
    { name: "Turtle", pdf: "/pdfs/turtle.pdf", icon: <GiSeaTurtle /> },
    {
      name: "SQLite3",
      pdf: "https://docs.python.org/3/library/sqlite3.html",
      icon: <GrMysql />,
    },
    { name: "Firebase", pdf: "/pdfs/firebase.pdf", icon: <IoLogoFirebase /> },
    { name: "NodeJs", pdf: "/pdfs/nodejs.pdf", icon: <FaNodeJs /> },
    { name: "C++", pdf: "/pdfs/cpp.pdf", icon: <TbBrandCpp /> },
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

  const [showMoreTechStack, setShowMoreTechStack] = useState(9);
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
      <div className="container tecccc techstack-section" id="techi">
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
                    {item.icon}
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
