import React, { useEffect, useState } from "react";
import "./Heroslider.css"; // Import the CSS file
import CybEthi from "../../assets/Cyb+Ethi.png";
import DataAI from "../../assets/data+ai.png";
import CloudDevOps from "../../assets/cloud+devops.png";

const Heroslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: CybEthi,
      title: "Cybersecurity & Ethics",
      topic: "Cyb+Ethi",
      description:
        "Learn the principles of cybersecurity and ethical practices to protect digital assets.",
    },
    {
      src: DataAI,
      title: "Data & AI",
      topic: "Data+AI",
      description:
        "Explore the world of data science and artificial intelligence to unlock insights.",
    },
    {
      src: CloudDevOps,
      title: "Cloud & DevOps",
      topic: "Cloud+DevOps",
      description:
        "Master cloud computing and DevOps practices to streamline development workflows.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <div className="list">
        {images.map((image, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? "active" : ""}`}
          >
            <img src={image.src} alt={image.topic} />
            <div className="introduce">
              <div className="title">{image.title}</div>
              <div className="topic">{image.topic}</div>
              <div className="des">{image.description}</div>
              <button className="seeMore">SEE MORE &#8599;</button>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button
          id="prev"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            )
          }
        >
          &lt;
        </button>
        <button
          id="next"
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Heroslider;