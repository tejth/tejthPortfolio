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
      year: "Sept 2023-Oct 2023",
      certlink:
        "https://media.licdn.com/dms/image/D4D2DAQEKrSXW6YqMCA/profile-treasury-image-shrink_1920_1920/0/1696716778720?e=1721462400&v=beta&t=ZRt87RR2gh_bTMGxA_QUdKoRucJFQa8AtVdHwcWuvnw",
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
      year: "Aug 2023-Sept 2023",
      certlink:
        "https://media.licdn.com/dms/image/D4D2DAQGxUqJmuqnaYQ/profile-treasury-image-shrink_1920_1920/0/1694149728046?e=1721462400&v=beta&t=f8Wvqzd5Loi6_dQSddzntAudDGHAFirvr_tJyjm39qY",
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
  const colors = ["#7c83c7", "#FF8042", "#4B088A", "#FF6347", "#FF1042"];
  return (
    <>
      <div className="container work-experience-section" id="experiencei">
        <div className="section-title">
          <h5>Work Experience</h5>
          <span className="line tech-stack-line"></span>
        </div>

        <div className="vttime">
          <VerticalTimeline className={"vt1"} lineColor="#FF1042">
            {data.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: colors[index],
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #FFBB24",
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
                  {item.techskills.map((tec, techIndex) => (
                    <div
                      className="col-xl-3 col-lg-3 col-md-6 col-sm-12"
                      key={techIndex}
                    >
                      <div className="tech-skills">
                        <p>{tec.techname}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p>
                  {item.des} after{" "}
                  <a
                    href={item.certlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    Certificate Link
                  </a>
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
