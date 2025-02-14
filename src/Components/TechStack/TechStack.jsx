import  { useState } from "react";
import "./TechStack.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import {
  SiJquery,
  SiDjango,
  SiPowerbi,
  SiNetlify,
  SiGeopandas,
  SiRedux,
  SiNumpy,
  SiFlask,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaGitAlt, FaPython} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";

function TechStack() {
  const data = [

    {
      name: "JavaScript",
      pdf: "https://drive.google.com/file/d/19zB4hmIwTZLyHFAphxPcHhhKZ_2Bz83G/view?usp=sharing",
      icon: <IoLogoJavascript />,
    },
    {
      name: "ReactJS",
      pdf: "https://drive.google.com/file/d/11K_09sjPNdQDzmYTBNTbvc5Q5LYKrzCw/view?usp=drive_link",
      icon: <FaReact />,
    },
    {
      name: "Python",
      pdf: "https://github.com/tejth/Python",
      icon: <FaPython />,
    },
    // New Tech Stack Entries
    {
      name: "Django",
      pdf: "https://www.djangoproject.com/",
      icon: <SiDjango />,
    },
    {
      name: "PowerBI",
      pdf: "https://powerbi.microsoft.com/",
      icon: <SiPowerbi />,
    },
    {
      name: "Netlify",
      pdf: "https://www.netlify.com/",
      icon: <SiNetlify />,
    },
    {
      name: "C++",
      pdf: "https://github.com/tejth/CPP-Codes",
      icon: <TbBrandCpp />,
    },
    {
      name: "Firebase",
      pdf: "https://drive.google.com/file/d/1Qt7CRALgWiMl3XsKzqQjnWSMfzCCSXSr/view?usp=drive_link",
      icon: <IoLogoFirebase />,
    },
    {
      name: "Flask",
      pdf: "https://drive.google.com/file/d/1thupqIQUdaCv6PffDELCPVAB__xzL_hx/view?usp=drive_link",
      icon: <SiFlask />,
    },
    {
      name: "SQLite3",
      pdf: "https://docs.python.org/3/library/sqlite3.html",
      icon: <GrMysql />,
    },
    {
      name: "HTML",
      pdf: "https://drive.google.com/file/d/1agKx3T_7d5FidlTw2VZPbbhfs6qbglQd/view?usp=drive_link",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      pdf: "https://drive.google.com/file/d/1dYeuYjVYk0fRMcX1EpriYp5VAqvlGTYR/view?usp=drive_link",
      icon: <FaCss3Alt />,
    },
    {
      name: "Bootstrap",
      pdf: "https://drive.google.com/file/d/1ZG_58MW33helTObdFM0vibRHniMElxON/view?usp=drive_link",
      icon: <FaBootstrap />,
    },
    {
      name: "TailWind CSS",
      pdf: "https://tailwind.build/classes",
      icon: <RiTailwindCssFill />,
    },
    {
      name: "Redux",
      pdf: "https://drive.google.com/file/d/1nVg155qS6tO0laVOS8awcBIN3uIjVccz/view?usp=drive_link",
      icon: <SiRedux />,
    },
    { name: "Jquery", pdf: "https://jquery.com/", icon: <SiJquery /> },
    {
      name: "GIT",
      pdf: "https://drive.google.com/file/d/1fWDq4kHij9JKpw-ns4aALB3huWa5DbCx/view?usp=drive_link",
      icon: <FaGitAlt />,
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

  ];

  const colors = [
    "#0088FE", // JavaScript
    "#48088A", // ReactJS
    "#8181F7", // Python
    "#FE2EF7", // C++
    "#585858", // Firebase
    "#00C79F", // Flask
    "#FFBB24", // SQLite3
    "#FF1042", // HTML
    "#0088FE", // CSS
    "#00C49F", // Bootstrap
    "#FFBB28", // TailWind CSS
    "#FF8042", // Redux
    "#001CCE", // jQuery
    "#00C79F", // GIT
    "#FFBB24", // Numpy
    "#FF1042", // Pandas
    "#34A7FF", // Django (Custom)
    "#00D6F7", // PowerBI (Custom)
    "#8D58F4", // Material UI (Custom)
    "#00A9A9", // Netlify (Custom)
    "#5C7E8B", // ChatGPT (Custom)
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
                  index === 0 ? "tech-content-marked tech-content" : "tech-content"
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
  );
}

export default TechStack;
