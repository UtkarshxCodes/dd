import React from "react";
import { useNavigate } from "react-router-dom";
import "./shery.css"; // Ensure the CSS file is imported

const SheryComponent = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register"); // Navigate to the CourseRegistration page
  };

  return (
    <div id="main">
      <div id="back">
        <img src="IMG_7564.JPG" alt="" />
        <img src="IMG_7565.JPG" alt="" />
        <img src="IMG_7566.JPG" alt="" />
        <img src="IMG_7567.JPG" alt="" />
        <img src="IMG_7568.JPG" alt="" />
      </div>
      <div id="top">
        <div id="workingarea">
          <div id="nav">
            <div id="nleft">
              <img src="raybanlogo.png" alt="Ray-Ban Logo" id="logo" />
              <a href="#">products</a>
              <a href="#">about</a>
            </div>
            <div id="nright">
              <a href="#">LUXE</a>
              <a href="#">pricing</a>
            </div>
          </div>
          <div id="hero">
            <div id="heroleft">
              <div className="elem">
                <h1>David Chang</h1>
                <h1>David Chang</h1>
                <h1>David Chang</h1>
                <h1>David Chang</h1>
                <h1>David Chang</h1>
              </div>
              <button onClick={handleRegisterClick}>Register Now</button>
            </div>
            <div id="heroright">
              <p>Lorem ipsum dolor dih dnn.</p>
              <div id="imagediv"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                sed, reiciendis repudiandae laudantium, voluptas magnam vel
                culpa hic possimus ipsa delectus id quia!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                ad magni veritatis eum ratione officia obcaecati, quos dolore,
                deleniti quisquam perspiciatis consectetur nostrum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SheryComponent;