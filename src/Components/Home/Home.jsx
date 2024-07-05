import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCv from "../../image/Profile.pdf";
import { BsFillMoonStarsFill, BsMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";

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
          <h1>Hi I'm a </h1>
          <h2>
            <Typewriter
              options={{
                strings: ["Frontend Developer!", "Web Developer!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <div className="button-for-action">
            <div className="hire-me-button">Hire Me</div>
            <div className="get-resume-button">
              <a href={MyCv} download="Tej_Resume.pdf">
                Get Resume
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
