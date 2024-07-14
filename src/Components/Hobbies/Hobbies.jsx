import React from "react";
import "./Hobbies.css";
import Zoom from "react-reveal/Zoom";
const Carousel = () => {
  const imgData = [
    {
      url: "https://scontent.fagr1-3.fna.fbcdn.net/v/t1.6435-9/76726098_201823777498642_8073324642758033408_n.jpg?stp=dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=WRTNMA3X8KoQ7kNvgEGShp0&_nc_ht=scontent.fagr1-3.fna&oh=00_AYBbUUR13UMR2u-KvFsGqad2h5Fbhpim5FcQwOUFpqg2qQ&oe=66B89328",
      title: "Track and Fields",
      description: "Won Gold Medals in 100m , 200m and 400m at district level.",
    },
    {
      url: "https://scontent.fagr1-1.fna.fbcdn.net/v/t1.6435-9/70401308_187305442283809_4117283042970566656_n.jpg?stp=dst-jpg_s600x600&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=W0RixjKNT5AQ7kNvgFZ6uxJ&_nc_ht=scontent.fagr1-1.fna&oh=00_AYDhPXJrpnrHYKys7usGUpY7SuL_ZglygvCAGagrgQ-PqA&oe=66B86D0A",
      title: "BasketBall",
      description:
        "Achieved multiple positions in intercity basketball competitions.",
    },
    {
      url: "https://scontent.fagr1-4.fna.fbcdn.net/v/t1.6435-9/76765498_204036040610749_6416395224251105280_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=H373E4du2dsQ7kNvgEwsi6a&_nc_ht=scontent.fagr1-4.fna&oh=00_AYCWPPshnjS6pNl6SDR-UHKWvZ1eDrpjYFSyQY5PDXGcvA&oe=66B87417",
      title: "Marathon",
      description: "Got First Position in 5km school Marathon race. ",
    },
    {
      url: "data:image/jpeg;base64,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",
      title: "Listening Music.",
      description: "",
    },
    {
      url: "https://i.ibb.co/XLP3LtG/ddd.jpg",
      title: "Hanging Out.",
      description: "",
    },
  ];

  return (
    <>
      <Zoom>
        <div className="container hobcon" id="hobi">
          <div className="section-title" style={{ marginBottom: "6px" }}>
            <h5>Hobbies</h5>
            <span className="line tech-stack-line"></span>
          </div>
          <div className="image-card-album">
            {imgData.map((img, index) => (
              <div className="card" key={index}>
                <div className="imgbox">
                  <img src={img.url} alt={img.title} />
                </div>
                <div className="contentt">
                  <h2>{img.title}</h2>
                  <p>{img.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default Carousel;
