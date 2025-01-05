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
      name: "JECRC University Jaipur",
      degree: "Btech (CSE)",
      year: "2022-2026",
      des: "Persuing my Btech from JECRC University Jaipur. (9.3 / 10 C.G.P.A)",
    },
    {
      name: "S.T Francis Inter College.",
      degree: "Physics , Chemistry , Maths and Computer Science",
      year: "2022",
      des: "Done My Schooling from CBSE Board! Got 85% in class 10th and 82% in class 12th. ",
    },
  ];

  const colors = ["#74caf9", "#00C49F"];

  return (
    <>
      <div className="container edu-sec" id="edui">
        <div className="section-title">
          <h5>Education</h5>
          <span className="line tech-stack-line"></span>
        </div>

        <div className="vttime">
          <VerticalTimeline className={"ed1"} lineColor="#FF1042">
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
