import "./Home.css";
import Typewriter from "typewriter-effect";
import {  BsMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
// import Flip from

function Home({ theme, changeTheme }) {
  return (
    <>
      <div className="container-fluid home" id="homei">
        <div className="theme-change" onClick={changeTheme}>
          {theme === "light" ? (
            <p>
              <BsMoonStarsFill size={25} />
            </p>
          ) : (
            <p className="sun-theme-icon">
              <IoSunny size={25} />{" "}
            </p>
          )}
        </div>
        <div className="container home-content">
          <div className="headandothers">
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
                <div className="hire-me-button">
                  <button className="button-86" role="button">
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href="#contacti"
                    >
                      Hire Me
                    </a>
                  </button>
                </div>
                <div className="get-resume-button">
                  <button className="button-86" role="button">
                    <a
                      href="https://drive.google.com/file/d/1W_K3t2CzhhmCKf7I_lifcJr69ZjypB65/view?usp=sharing"
                      download="resume.pdf"
                    >
                      Get Resume
                    </a>
                  </button>
                </div>
              </div>
            </Fade>
          </div>

          <div className="showcase">
            <Zoom>
              <div className="circlecmp app-flex">
                <img
                  src="data:image/png;base64,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"
                  alt="circle"
                ></img>
              </div>

              <div className="circlecmp app-flex py">
                <img
                  src="data:image/png;base64,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"
                  alt="circle"
                ></img>
              </div>

              <div className="circlecmp app-flex react">
                <img
                  src="data:image/png;base64,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"
                  alt="circle"
                ></img>
              </div>

              <div className="circlecmp app-flex redux">
                <img
                  src="data:image/png;base64,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"
                  alt="circle"
                ></img>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
