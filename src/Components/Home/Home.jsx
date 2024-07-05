import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCv from "../../image/Profile.pdf";
import { BsFillMoonStarsFill, BsMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
import Fade from "react-reveal/Fade";

function Home({ theme, changeTheme }) {
  return (
    <>
      <div className="container-fluid home" id="homei">
        <div className="theme-change" onClick={changeTheme}>
          {theme === "light" ? (
            <p>
              <BsMoonStarsFill size={40} />
            </p>
          ) : (
            <p className="sun-theme-icon">
              <IoSunny size={40} />{" "}
            </p>
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h1>Hi I'm Tejendra! </h1>
            <h2>
              <Typewriter
                options={{
                  strings: ["Frontend Developer.", "Web Developer."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </Fade>

          <Fade bottom>
            <div className="button-for-action">
              <div className="hire-me-button">Hire Me</div>
              <div className="get-resume-button">
                <a href={MyCv} download="Tej_Resume.pdf">
                  Get Resume
                </a>{" "}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Home;
