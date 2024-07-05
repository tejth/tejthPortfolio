import React from "react";
import "./Project.css";
import "./ProjectList";
import ProjectList from "./ProjectList";
function Project() {
  const data = [
    {
      name: "Alexa A.I",
      des: "A Voice Assistant A.I Similar to chatGpt that receives requests from user either through mic or keyboard  and send responses . It also performs basic taks such as opening application , Playing Music , Telling Weather etc..",
      projectlink: "https://drive.google.com/drive/u/1/home",
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
      name: "DriveBook",
      des: "Allows booking of self driven vehicles based on various Filters",
      projectlink: "https://drive.google.com/drive/u/1/home",
      techused: [
        {
          techname: "ReactJs",
        },
        {
          techname: "CSS",
        },
        {
          techname: "Redux",
        },
        {
          techname: "Firebase",
        },
      ],
    },
    {
      name: "PortFolio",
      des: "My Portfolio website describing my projects,skills, etc... ",
      projectlink: "https://drive.google.com/drive/u/1/home",
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
          techname: "Python",
        },
        {
          techname: "Firebase",
        },
      ],
    },
    {
      name: "Todo List app",
      des: "A simple To do list app based on LocalStorage. ",
      projectlink: "https://drive.google.com/drive/u/1/home",
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
      projectlink: "https://drive.google.com/drive/u/1/home",
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
      projectlink: "https://drive.google.com/drive/u/1/home",
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
      name: "NotesApp",
      des: "Aloows you to write Notes.",
      projectlink: "https://drive.google.com/drive/u/1/home",
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
      des: "Allows you to write Notes.",
      projectlink: "https://drive.google.com/drive/u/1/home",
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
      name: "ThemeSwitcher",
      des: "Demonstrates How to change background color of a webpage.",
      projectlink: "https://drive.google.com/drive/u/1/home",
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
      name: "Pokedex",
      des: "Shows Different Pokemons in the form of cards in an interactive Way",
      projectlink: "https://drive.google.com/drive/u/1/home",
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
      <div className="container" id="projecti">
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
