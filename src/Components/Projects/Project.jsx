import React from "react";
import "./Project.css";
import "./ProjectList";
import ProjectList from "./ProjectList";
function Project() {
  const data = [
    {
      name: "Alexa A.I",
      des: "A Voice Assistant A.I Similar to chatGpt that receives requests from user either through mic or keyboard  and send responses . It also performs basic taks such as opening application , Playing Music , Telling Weather etc..",
      projectlink: "https://tejth-aialexa.netlify.app/",
      sourcelink: "https://github.com/tejth/AlexaVoiceAssistantAi",
      techused: [
        {
          techname: "Python",
        },
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JS",
        },
        {
          techname: "SQLite",
        },
      ],
    },
    {
      name: "SymptoCare",
      des: "Medical Recommendation tool that gives information about medicines and precautions based on the symptoms entered by the user . Utilizees Machine Learning alogorithm to give results accurately based on input.",
      projectlink: "https://tejth-medicalassist.netlify.app/",
      sourcelink: "https://github.com/tejth/SymptoCare",
      techused: [
        {
          techname: "Python",
        },
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "Numpy",
        },
        {
          techname: "Pandas",
        },
        {
          techname: "Scikit Learn",
        },
      ],
    },
    {
      name: "PortFolio",
      des: "My Portfolio website describing my projects , skills, etc... ",
      projectlink: "https://tejth-v1.netlify.app/",
      sourcelink: "https://github.com/tejth/tejthPortfolio",
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "JS",
        },
        {
          techname: "ReactJS",
        },
        {
          techname: "Firebase",
        },
      ],
    },
    {
      name: "Todo List app",
      des: "A simple To do list app that allows you to add your task that have to be completed . ",
      projectlink: "https://tejth-todo.netlify.app/",
      sourcelink:
        "https://github.com/tejth/ReactjS/tree/main/09reduxToolkitTodo",
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JS",
        },
        {
          techname: "ReactJS",
        },
        {
          techname: "Redux",
        },
      ],
    },
    {
      name: "Google Clone",
      des: "Google clone that allows you to search and get results similar to google.",
      projectlink: "https://searchapptejth.netlify.app",
      sourcelink: "https://github.com/tejth/GoogleSearchClone",
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JS",
        },
        {
          techname: "ReactJS",
        },
      ],
    },
    {
      name: "MovieApp",
      des: "A simple App that shows you description of a movie along with its rating",
      projectlink: "https://tejth-movieapp.netlify.app/",
      sourcelink: "https://github.com/tejth/Movie-App ",
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JS",
        },
      ],
    },
    {
      name: "CurrencyConvertor",
      des: "Allows you to convert currency of one country to another",
      projectlink: "https://tejth-currencyconvertor.netlify.app/",
      sourcelink:
        " https://github.com/tejth/ReactjS/tree/main/05currencyConvertor ",
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JS",
        },
      ],
    },
    {
      name: "WeatherLocator",
      des: "Get instant Weather of Your City With Weather information.",
      projectlink: "https://tejth-weatherapp.netlify.app/",
      sourcelink: "https://github.com/tejth/ReactjS/tree/main/WeatherLocator ",
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JS",
        },
        {
          techname: "ReactJS",
        },
      ],
    },
    {
      name: "Drawing WebApp",
      des: "A simple Webpage That allows you to draw on screen similar to paint app",
      projectlink: "https://tejth-drawingapp.netlify.app/",
      sourcelink: " https://github.com/tejth/ReactjS/tree/main/drawing-app  ",
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JS",
        },
        {
          techname: "ReactJS",
        },
      ],
    },
    {
      name: "Codepen Clone",
      des: "Real Time codeEditor for html , css and Js that allows you to write code and display resukt immediately.",
      projectlink: "https://tejth-codepen.netlify.app/",
      sourcelink: "https://github.com/tejth/codepenClone ",
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JS",
        },
      ],
    },
  ];
  return (
    <>
      <div className="container proooo" id="projecti">
        <div className="section-title">
          <h5>Projects</h5>
          <span className="line tech-stack-line"></span>
        </div>
        <div className="row projectclass">
          {data.map((item, index) => (
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
              <ProjectList {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
