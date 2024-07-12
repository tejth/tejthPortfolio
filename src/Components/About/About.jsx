import React, { useState } from "react";
import "./About.css";
import ProfilePic from "../../image/profile.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaMedium } from "react-icons/fa6";

function About() {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const button = e.currentTarget;
    const rippleContainer = button.querySelector(".ripple-container");

    const size = Math.max(button.clientWidth, button.clientHeight);
    const pos = button.getBoundingClientRect();
    const x = e.clientX - pos.left - size / 2;
    const y = e.clientY - pos.top - size / 2;

    const ripple = {
      x,
      y,
      size,
    };

    setRipples([...ripples, ripple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r !== ripple));
    }, 500);
  };

  return (
    <div className="container about-section" id="abouti">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={ProfilePic} alt="PROFILE PHOTO" />
            </div>
          </div>
        </Fade>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <Flip left>
              <div className="about-title">
                <h5>About Me</h5>
                <span className="line"></span>
              </div>
            </Flip>

            <Fade right>
              <div className="squre ">
                <span></span>
                <span></span>
                <span></span>
                <div className="content">
                  <h2>Voilà! I am Tejendra!</h2>
                  <p>
                    A passionate frontend developer with a flair for crafting
                    beautiful and responsive web applications.Currently Learning
                    Backend exploring world of Data Science.
                    <br />
                    When I'm not coding , I am eating pani puri. 😋
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="buttonnn">
        <a
          href="https://www.linkedin.com/in/tejendra-pal-singh-6b595a235/"
          target="_blank"
          rel="noopener noreferrer"
          className="ripple-link"
          onClick={handleClick}
        >
          <button className="ripple">
            <span className="ripple-container"></span>
            <CiLinkedin />
          </button>
        </a>
        <a
          href="https://github.com/tejth"
          target="_blank"
          rel="noopener noreferrer"
          className="ripple-link"
          onClick={handleClick}
        >
          <button className="ripple">
            <span className="ripple-container"></span>
            <FaGithub />
          </button>
        </a>
        <a
          href="https://leetcode.com/u/ptejendra91/"
          target="_blank"
          rel="noopener noreferrer"
          className="ripple-link"
          onClick={handleClick}
        >
          <button className="ripple">
            <span className="ripple-container"></span>
            <SiLeetcode />
          </button>
        </a>
        <a
          href="https://medium.com/@ptejendra91"
          target="_blank"
          rel="noopener noreferrer"
          className="ripple-link"
          onClick={handleClick}
        >
          <button className="ripple">
            <span className="ripple-container"></span>
            <FaMedium />
          </button>
        </a>
        <a
          href="https://www.facebook.com/tejtushar.singh"
          target="_blank"
          rel="noopener noreferrer"
          className="ripple-link"
          onClick={handleClick}
        >
          <button className="ripple">
            <span className="ripple-container"></span>
            <FaFacebook />
          </button>
        </a>
        {ripples.map((ripple, index) => (
          <span
            key={index}
            className="circle"
            style={{
              top: ripple.y + "px",
              left: ripple.x + "px",
              width: ripple.size + "px",
              height: ripple.size + "px",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default About;
