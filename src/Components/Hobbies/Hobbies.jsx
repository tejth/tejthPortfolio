import React, { useState, useEffect, useRef } from "react";
import "./Hobbies.css";

const Carousel = () => {
  const [idx, setIdx] = useState(0);
  const intervalRef = useRef(null);

  const imgUrls = [
    "https://scontent.fdel25-1.fna.fbcdn.net/v/t1.6435-9/78192228_204036020610751_2459548030332829696_n.jpg?stp=dst-jpg_s600x600&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=VHOeTXL-k8cQ7kNvgH2ER0b&_nc_ht=scontent.fdel25-1.fna&oh=00_AYA6Ay2UaXLR0AJenRypO-Da8pgz0_B2cHUTqRn0DyiG6A&oe=66AF7BA4",
    "https://scontent.fdel25-3.fna.fbcdn.net/v/t1.6435-9/76765498_204036040610749_6416395224251105280_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=EAHvFzrhwSsQ7kNvgGk7JNT&_nc_ht=scontent.fdel25-3.fna&oh=00_AYCS-KFLDZi3eq84fZgHp6-zNn1CFNpzEf__tCXRL5Qy5g&oe=66AF71D7",
    "https://scontent.fdel25-3.fna.fbcdn.net/v/t1.6435-9/72772710_203377907343229_2504000452220157952_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=SwdLVht4024Q7kNvgFxg8xq&_nc_ht=scontent.fdel25-3.fna&oh=00_AYCObiZCLM-V8-JEfXvvCmfeylcQbXfb5tWlWLX9EP1xLQ&oe=66AF8863",
    "https://scontent.fdel25-2.fna.fbcdn.net/v/t1.6435-9/76726098_201823777498642_8073324642758033408_n.jpg?stp=dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=h71EC_9P4ycQ7kNvgGR0rrP&_nc_ht=scontent.fdel25-2.fna&oh=00_AYAmS20rpJK05EqtskDdJ3HMMjdakr8Zv7Qga1jFQAhGsg&oe=66AF58A8",
    "https://scontent.fdel25-1.fna.fbcdn.net/v/t1.6435-9/48379765_128455341502153_3481644122433912832_n.jpg?stp=dst-jpg_p552x414&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=sqTEhagbFgoQ7kNvgGz5YNJ&_nc_ht=scontent.fdel25-1.fna&gid=ACXfbtzOF8vxgk3Owx0Jkik&oh=00_AYD3RvbCFe7WAD45uLJDDpwVtzdSGxJOSoB_uEIIrlRMyg&oe=66AF8EC2",
    "https://scontent.fdel25-5.fna.fbcdn.net/v/t1.6435-9/69537020_187305458950474_3781478516671905792_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=IYmKRtIItzMQ7kNvgFFr37o&_nc_ht=scontent.fdel25-5.fna&oh=00_AYDJOBPBUFzovl09kysq9mrDLp4viw9F6BgWk4XeVA4S3g&oe=66AF7606",
    "https://scontent.fdel25-1.fna.fbcdn.net/v/t1.6435-9/92611819_265248104489542_8682201458864553984_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=2ope46KM6RQQ7kNvgGSNc7G&_nc_ht=scontent.fdel25-1.fna&gid=AUC-1EUX_PygE8pnTVrYoUC&oh=00_AYBOGDvEchPrbyOzMZVCW59bpyp4cXVWaIIY3x0cfYEt2A&oe=66AF6088",
    "https://scontent.fdel25-4.fna.fbcdn.net/v/t1.6435-9/69744071_187305422283811_2107310795950915584_n.jpg?stp=dst-jpg_s600x600&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=E3bN7K2vvTwQ7kNvgERrrGS&_nc_ht=scontent.fdel25-4.fna&oh=00_AYBsX0YCQDK9cPdB1z_2dJoyT0kuA0m_v2UDLYsmuho1YQ&oe=66AF7AC2",
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIdx((prevIdx) => (prevIdx + 1) % imgUrls.length);
    }, 2000);

    return () => clearInterval(intervalRef.current);
  }, [imgUrls.length]);

  const changeImage = (newIdx) => {
    setIdx((prevIdx) => {
      if (newIdx > imgUrls.length - 1) {
        return 0;
      } else if (newIdx < 0) {
        return imgUrls.length - 1;
      }
      return newIdx;
    });
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIdx((prevIdx) => (prevIdx + 1) % imgUrls.length);
    }, 2000);
  };

  return (
    <>
      <div className="container hobcon " id="hobi">
        <div className="section-title" style={{ marginBottom: "6px" }}>
          <h5>Hobbies</h5>
          <span className="line tech-stack-line"></span>
        </div>
        <div className="carousel">
          <div
            className="image-container"
            style={{ transform: `translateX(${-idx * 100}%)` }}
          >
            {imgUrls.map((url, index) => (
              <img
                style={{ width: "100%", height: "100%" }}
                key={index}
                src={url}
                alt={`carousel-image-${index}`}
              />
            ))}
          </div>

          <div className="buttons-container">
            <button className="btn" onClick={() => changeImage(idx - 1)}>
              Prev
            </button>
            <button className="btn" onClick={() => changeImage(idx + 1)}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
