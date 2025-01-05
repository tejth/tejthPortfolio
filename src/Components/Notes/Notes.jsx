import React, { useEffect, useState } from "react";
import "./Notes.css"; // Import the CSS file
import Zoom from "react-reveal/Zoom";
const Notes = () => {
  const [cards, setCards] = useState(Array(8).fill(null));

  useEffect(() => {
    setTimeout(getData, 2500);
  }, []);

  const getData = () => {
    const data = [
      {
        title: "Semister Notes",
        excerpt: "Semester wise  Subjects Notes",
        link: "https://drive.google.com/drive/folders/1Vk8hvKBh2oqVFf60qI34rvciJovjcJyZ?usp=sharing",
      },
      {
        title: "Placement Oriented",
        excerpt: "Placement Oriented Subjects Notes",
        link: "https://drive.google.com/drive/folders/1U12XQYSeTiAdK5UM0ESnUZHNcMfqikFM?usp=drive_link",
      },
      {
        title: "Others",
        excerpt: "Other Notes",
        link: "https://drive.google.com/drive/folders/1sFeOHs5tORfaWpAIko_qKUpYmej3xh80?usp=drive_link",
      },
    ];

    setCards(data);
  };

  return (
    <Zoom>
      <div className="container notes-main" id="notesi">
        <div className="section-title notes-titlee">
          <h5>Notes</h5>
          <span className="line tech-stack-line"></span>
        </div>
        <div className="main-div">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <div className="face face1">
                <div className="content">
                  {card ? (
                    <>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLdmAs4XgaM5Z6zjRrqbVi077U5VabZ9t-Q&s"
                        alt={card.title}
                        className="card-img"
                      />
                      <h3>{card.title}</h3>
                    </>
                  ) : (
                    "\u00A0"
                  )}
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                    {card ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={card.link}
                        style={{ textDecoration: "none" }}
                      >
                        {card.excerpt}
                      </a>
                    ) : (
                      "\u00A0"
                    )}
                  </p>
                  {card && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={card.link}
                    >
                      Read More
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Zoom>
  );
};

export default Notes;
