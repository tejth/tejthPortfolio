import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const data = [
    {
      name: "S.T Francis Inter College.",
      degree: "Science + Maths + Computer",
      year: "2022",
      des: "Done My Schooling from CBSE school , Got 84% in class 10th and 82% in class 12th. ",
    },
    {
      name: "JECRC University Jaipur",
      degree: "Btech (CSE)",
      year: "2022-2026",
      des: "Persuing my Btech from JECRC University Jaipur.",
    },
  ];
  const colors = ["#001CCE", "#00C49F"];

  return (
    <>
      <div className="container edu-sec" id="edui">
        <div className="section-title">
          <h5>Education</h5>
          <span className="line tech-stack-line"></span>
        </div>

        <div className="vttime">
          <VerticalTimeline lineColor="#FF1042">
            {data.map((item, index) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: colors[index],
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #FFBB24",
                }}
                date={item.year}
                dateClassName="date-class"
                iconStyle={{ background: colors[index], color: "#fff" }}
                icon={<FaGraduationCap />}
              >
                <h4 className="vertical-timeline-element-title">{item.name}</h4>
                <h5
                  className="vertical-timeline-element-subtitle"
                  style={{ color: "yellow" }}
                >
                  {item.degree}
                </h5>

                <p>{item.des}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default Education;
