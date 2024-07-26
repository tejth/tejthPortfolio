import React, { useEffect, useState } from "react";
import "./Certificate.css";
import MohanaSunsetTrees from "./assets/C1.jpg";
import PlaneSkyBest from "./assets/CER2.jpg";
import RangoliDesign from "./assets/CER3.jpg";
import SunsetAtSaltlake from "./assets/CER4.jpg";
import TaxiSide from "./assets/26.jpg";
import UdaypurParaglydig from "./assets/cf6.jpg";
import ap from "./assets/24.jpg";
import lastt from "./assets/last.jpg";
import final from "./assets/final.jpg";

import Zoom from "react-reveal/Zoom";

const Certificate = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const box = document.querySelector(".box");
    const handleMouseClick = () => {
      setRotation((prevRotation) => prevRotation + 45);
    };

    window.addEventListener("click", handleMouseClick);

    return () => {
      window.removeEventListener("click", handleMouseClick);
    };
  }, []);

  return (
    <>
      <Zoom>
        <div className="mine">
          <div className="section-title">
            <h5>Certificates</h5>
            <span className="line tech-stack-line"></span>
          </div>
          <div className="certificatecon " id="certi">
            <div
              className="box"
              style={{
                transform: `perspective(1000px) rotateY(${rotation}deg)`,
              }}
            >
              <span style={{ "--i": 1 }}>
                <img src={MohanaSunsetTrees} alt="certificate-img" />
              </span>
              <span style={{ "--i": 2 }}>
                <img src={PlaneSkyBest} alt="certificate-img" />
              </span>
              <span style={{ "--i": 3 }}>
                <img src={RangoliDesign} alt="certificate-img" />
              </span>
              <span style={{ "--i": 4 }}>
                <img src={SunsetAtSaltlake} alt="certificate-img" />
              </span>
              <span style={{ "--i": 5 }}>
                <img src={TaxiSide} alt="certificate-img" />
              </span>
              <span style={{ "--i": 6 }}>
                <img src={UdaypurParaglydig} alt="certificate-img" />
              </span>
              <span style={{ "--i": 7 }}>
                <img src={ap} alt="certificate-img" />
              </span>
              <span style={{ "--i": 8 }}>
                <img src={lastt} alt="certificate-img" />
              </span>
              <span style={{ "--i": 9 }}>
                <img src={final} alt="certificate-img" />
              </span>
            </div>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default Certificate;
