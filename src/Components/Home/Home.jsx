import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <>
      <div className="container-fluid home">
        <div className="container home-content">
          <h1>Hi I'm a </h1>
          <h2>
            <Typewriter
              options={{
                strings: ["Frontend Developer!", "Web Developer!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
      </div>
    </>
  );
}

export default Home;
