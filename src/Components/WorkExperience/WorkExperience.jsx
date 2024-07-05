import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdGroupWork } from "react-icons/md";

function WorkExperience() {
  const data = [
    {
      companyname: "InternPe",
      position: "Frontend Developer",
      des: "Created Three Projects assigned to me by Internpe in Three Months.",
      year: "2019-2020",

      techskills: [
        {
          techname: "CSS",
        },
        {
          techname: "ReactJs",
        },
        {
          techname: "Bootstrap",
        },
      ],
    },
    {
      companyname: "Codesoft",
      position: "Frontend Developer",
      des: "Created Three Projects assigned to me by Internpe in Three Months.",
      year: "2019-2020",
      techskills: [
        {
          techname: "CSS",
        },
        {
          techname: "ReactJs",
        },
        {
          techname: "Bootstrap",
        },
      ],
    },
  ];
  const colors = ["#800000", "#FF8042", "#4B088A", "#FF6347", "#FF1042"];
  return (
    <>
      <div className="container  work-experience-section" id="experiencei">
        <div className="section-title">
          <h5>Work Experience</h5>
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
                icon={<MdGroupWork />}
              >
                <h4 className="vertical-timeline-element-title">
                  {item.companyname}
                </h4>
                <h6 className="vertical-timeline-element-subtitle">
                  {item.position}
                </h6>

                <div className="row">
                  {item.techskills.map((tec, index) => (
                    <div
                      className="col-xl-3 col-lg-3 col-md-6 col-sm-12"
                      key={index}
                    >
                      <div className="tech-skills">
                        <p>{tec.techname}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p>{item.des}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
