import React from "react";
import "./About.css";
import ProfilePic from "../../image/profile.jpg";

function About() {
  return (
    <div className="container about-section">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img src={ProfilePic} alt="PROFILE PHOTO" />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h5>About Me</h5>
              <span className="line"></span>
            </div>
            <p>
              Hey there! I'm Tejendra, a passionate BTech student with a knack
              for crafting delightful user experiences through frontend
              development. Currently immersed in the dynamic world of web
              technologies, I thrive on turning ideas into interactive,
              pixel-perfect realities. Driven by a curiosity for blending
              creativity with functionality, I specialize in harnessing HTML,
              CSS, and JavaScript to breathe life into web interfaces. Whether
              it's responsive designs that adapt seamlessly across devices or
              optimizing user journeys through intuitive UX/UI, I am dedicated
              to creating experiences that leave a lasting impression. Beyond
              coding, I am always exploring the latest trends in frontend
              frameworks like React and Vue.js, constantly refining my skills to
              stay at the forefront of innovation. Let's connect and discuss how
              we can elevate digital experiences together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
