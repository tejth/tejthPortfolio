import React, { useState } from "react";
import "./About.css";
import ProfilePic from "../../image/profile.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

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
              <p className="abtpara animated-text">
                Voilà! I'm Tejendra, a passionate BTech student with a knack for
                crafting delightful user experiences through frontend
                development. Currently immersed in the dynamic world of web
                technologies. I specialize in harnessing HTML, CSS, and
                JavaScript to breathe life into web interfaces. Whether it's
                responsive designs that adapt seamlessly across devices or
                optimizing user journeys through intuitive UX/UI. Beyond coding,
                I am always exploring the latest trends in frontend frameworks
                like React.. constantly refining my skills. Currenly Learning
                Backend with NodeJs. Let's connect and discuss how we can
                elevate digital experiences together!
              </p>
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
            LinkedIN
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
            Github
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
            LeetCode
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
            Facebook
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
