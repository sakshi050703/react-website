import React from "react";
import '../Pages/Hom.css'
import img from '../Assest/Home.jpg'
const Hom = () => {
  return (
    <div>
      <div className="agency-container mt-5 ms-5 mb-5 p-5">
        <div className="text-container">
          <h1 className="high-end">HIGH END</h1>
          <h1 className="digital">
            <span className="outline digital">DIGITAL</span> <span className="agency">AGENCY</span>
          </h1>
        </div>
        <div className="explore-container me-5">
          <div className="outer-circle">
            <div className="rotating-text">
              {"EXPLORE MORE - ".repeat(3).split("").map((char, index) => (
                <span key={index} style={{ transform: `rotate(${index * 10}deg)` }}>
                  {char}
                </span>
              ))}
            </div>
          </div>
          <div className="inner-circle">
            <span className="arrow">→</span>
          </div>
        </div>
      </div>


      <div>
        <div className="hero-section d-flex align-items-center">
          <div className="container">
            <div className="row">
              {/* Left Content */}
              <div className="col-md-6 text-white">
                <h2>We are Digital Boost Media</h2>
                <p>
                  We are passionate about start-ups. Let us use our experience in this industry to help grow and shape your ideas into reality.
                </p>
              </div>
              {/* Right Image */}
              <div className="col-md-6">
                <img src={img} alt="Computer Setup" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hom;
