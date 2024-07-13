import React, { useEffect } from "react";
import "./Certificate.css";
import MohanaSunsetTrees from "./assets/C1.jpg";
import PlaneSkyBest from "./assets/CER2.jpg";
import RangoliDesign from "./assets/CER3.jpg";
import SunsetAtSaltlake from "./assets/CER4.jpg";
import TaxiSide from "./assets/26.jpg";
import UdaypurParaglydig from "./assets/cf6.jpg";
import ap from "./assets/24.jpg";
import lastt from "./assets/last.jpg";

const Certificate = () => {
  useEffect(() => {
    const box = document.querySelector(".box");
    const handleMouseMove = (e) => {
      const r = e.clientX / 5;
      box.style.transform = `perspective(1000px) rotateY(${r}deg)`;
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="mine">
        <div className="section-title">
          <h5>Certificates</h5>
          <span className="line tech-stack-line"></span>
        </div>
        <div className="certificatecon " id="certi">
          <div className="box">
            <span style={{ "--i": 1 }}>
              <img src={MohanaSunsetTrees} alt="Mohana_sunset_trees" />
            </span>
            <span style={{ "--i": 2 }}>
              <img src={PlaneSkyBest} alt="plane_sky" />
            </span>
            <span style={{ "--i": 3 }}>
              <img src={RangoliDesign} alt="Rangoli_design" />
            </span>
            <span style={{ "--i": 4 }}>
              <img src={SunsetAtSaltlake} alt="sunset_at_saltlake" />
            </span>
            <span style={{ "--i": 5 }}>
              <img src={TaxiSide} alt="taxi_side" />
            </span>
            <span style={{ "--i": 6 }}>
              <img src={UdaypurParaglydig} alt="udaypur_paraglydig" />
            </span>
            <span style={{ "--i": 7 }}>
              <img src={ap} alt="udaypur_paraglydig" />
            </span>
            <span style={{ "--i": 8 }}>
              <img src={lastt} alt="udaypur_paraglydig" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
