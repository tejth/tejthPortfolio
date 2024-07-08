import React, { useEffect, useState } from "react";
import "./Notes.css"; // Import the CSS file

const Notes = () => {
  const [cards, setCards] = useState(Array(8).fill(null));

  useEffect(() => {
    setTimeout(getData, 2500);
  }, []);

  const getData = () => {
    const data = [
      {
        title: "Sem 1 Notes",
        excerpt: "Semester 1 Subjects Notes",
        link: "https://drive.google.com/drive/folders/1YKGlpteJefsRufHpU2jyEDXUbpzsa3Ju?usp=sharing",
      },
      {
        title: "Sem 2 Notes",
        excerpt: "Semester 2 Subjects Notes",
        link: "https://drive.google.com/drive/folders/13Wva-RD9C7T2hi9ywg39KEWKN9kb7TMw?usp=sharing",
      },
      {
        title: "Sem 3 Notes",
        excerpt: "Semester 3 Subjects Notes",
        link: "https://drive.google.com/drive/folders/12FGIuER1WR9AuA8NAENLsmDTqfeSsWfK?usp=sharing",
      },
      {
        excerpt: "Semester 4 Subjects Notes",
        link: "https://drive.google.com/drive/folders/1g1pH1hxGQ8SRkaCE1UmkgehZ0Mw3cKdW?usp=sharing",
      },
      {
        excerpt: "Semester 5 Subjects Notes",
        link: "https://drive.google.com/drive/folders/10YMAw-jaKkIkPt_sPhFqn2CuS0huTSlw?usp=sharing",
      },
      {
        excerpt: "Semester 6 Subjects Notes",
        link: "https://drive.google.com/drive/folders/1p_T_CD3bEaTNo89z1C7WS8ftz0uclD8t?usp=sharing",
      },
      {
        excerpt: "Important Placement Oriented Subjects",
        link: "https://drive.google.com/drive/folders/1U12XQYSeTiAdK5UM0ESnUZHNcMfqikFM?usp=sharing",
      },
      {
        title: "Others",
        excerpt: "Other Optional notes",
        link: "https://drive.google.com/drive/folders/1sFeOHs5tORfaWpAIko_qKUpYmej3xh80?usp=sharing",
      },
    ];

    setCards(data);
  };

  return (
    <div className="container notes-main" id="notesi">
      <div className="section-title notes-titlee">
        <h5>Notes</h5>
        <span className="line tech-stack-line"></span>
      </div>
      <div className="main-div">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-header animated-bg header">
              {card ? (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLdmAs4XgaM5Z6zjRrqbVi077U5VabZ9t-Q&s"
                  alt={card.title}
                  className="card-img"
                />
              ) : (
                "\u00A0"
              )}
            </div>
            <div className="card-content">
              <p className="card-excerpt excerpt">
                {card ? (
                  <a
                    target="_blank"
                    href={card.link}
                    style={{ textDecoration: "none" }}
                  >
                    {card.excerpt}
                  </a>
                ) : (
                  "\u00A0"
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
