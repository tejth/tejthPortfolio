import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
  ];
  return (
    <>
      <div className="container">
        <div className="section-title">
          <h5>Work Experience</h5>
          <span className="line tech-stack-line"></span>
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
