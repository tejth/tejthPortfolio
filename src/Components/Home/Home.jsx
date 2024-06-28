import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCv from "../../image/Profile.pdf";
function Home() {
  return (
    <>
      <div className="container-fluid home">
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
