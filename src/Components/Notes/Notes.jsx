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
      },
      {
        title: "Sem 2 Notes",
        excerpt: "Semester 2 Subjects Notes",
      },
      {
        title: "Sem 3 Notes",
        excerpt: "Semester 3 Subjects Notes",
      },
      {
        title: "Sem 4 Notes",
        excerpt: "Semester 4 Subjects Notes",
      },
      {
        title: "Sem 5 Notes",
        excerpt: "Semester 5 Subjects Notes",
      },
      {
        title: "Sem 6 Notes",
        excerpt: "Semester 6 Subjects Notes",
      },
      {
        title: "Placement Subjects",
        excerpt: "Important Placement Oriented Subjects",
      },
      { title: "Others", excerpt: "Other Optional notes" },
    ];

    setCards(data);
  };

  return (
    <div className="container notes-main">
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
              <h3 className="card-title animated-bg animated-bg-text title">
                {card ? card.title : "\u00A0"}
              </h3>
              <p className="card-excerpt excerpt">
                {card ? card.excerpt : "\u00A0"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
