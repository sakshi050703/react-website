import React from "react";
import '../Pages/Home.css'
import img from '../Assest/Home.jpg'
import Home2 from '../Assest/Home-2.jpg'
import logo2 from '../Assest/logo-2.png'
import logo3 from '../Assest/logo-3.png'
import card1 from '../Assest/c-1.png'
import card2 from '../Assest/C-2.png'
import card3 from '../Assest/c-3.png'
import card4 from '../Assest/c-4.png'

const Home = () => {
  return (
    <div>
      <div className="agency-container mt-5 ms-5 p-5">
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


      <div className="mb-5">
        <div className="hero-section d-flex align-items-center">
          <div className="container">
            <div className="row">
              {/* Left Content */}
              <div className="col-md-6 text-white">
                <p className="ms-5 me-5 fs-5 text-center mt-5">
                  We are Digital Boost Media. We are passionate about start-ups. Let us use our experience in this industry to help grow and shape your ideas into reality.
                </p>
              </div>
              {/* Right Image */}
              <div className="col-md-6 mt-1">
                <img src={img} alt="Computer Setup" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div >
        <div className="container ">
          <div className="row mt-5">
            <div className="col-md-6 mt-5">
              <div className="container">
                <button className="btn btn-dark mb-4 p-3 ms-5 rounded-4 d-block">ABOUT US</button>
              </div>
              <div className="container">
                <h1 className="mb-4 text-start ms-5">
                  <span className="d-block">Our Team of</span>
                  <span className="d-block">Dedicated Digital</span>
                  <span className="d-block">Professionals</span>
                </h1>
              </div>
            </div>
            <div class="col-md-6 text-start mt-5 mb-5">
              <p>At Digital Boost Media, we live and breathe everything digital.
              </p>
              <p>
                We are not just a company, we are a team of passionate experts dedicated to transforming your online presence into an extraordinary success story.
              </p>
              <p className="mb-3">
                With a relentless pursuit of innovation and excellence, we offer a comprehensive suite of services that cater to all your digital needs.
              </p>
              <p className="mb-3">
                With a relentless pursuit of innovation and excellence, we offer a comprehensive suite of services that cater to all your digital needs.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div class="container">
          <div class="row mt-5">
            <div class="col-md-6">
              <img src={Home2} alt='pic' width='400px' height='600px' />
            </div>
            <div class="col-md-6">
              <div className="container">
                <h1 className="mb-4 text-start ms-5">
                  <span className="d-block">Unlock Revenue</span>
                  <span className="d-block">Growth for Your</span>
                  <span className="d-block">Business</span>
                </h1>
              </div>
              <div className="container mb-5">
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }} className="mt-5">
                  <div className="ms-5">
                    <img src={logo2} alt="logo" width="60px" height="60px" />
                  </div>
                  <div style={{ textAlign: "left" }} className="ms-5">
                    <h3 style={{ marginBottom: "0px" }}>High Standard</h3>
                    <p style={{ marginTop: "0px" }}>
                      "Digital Boost Media: Elevating standards in technology with unparalleled digital solutions."
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }} className="mt-5">
                  <div className="ms-5">
                    <img src={logo3} alt="logo" width="60px" height="60px" />
                  </div>
                  <div style={{ textAlign: "left" }} className="ms-5">
                    <h3 style={{ marginBottom: "0px" }}>Ease of Communication</h3>
                    <p style={{ marginTop: "0px" }}>
                      "Digital Boost Media: Simplifying communication with seamless technological solutions."                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="marquee-container mt-5 mb-5">
          <div className="marquee">
            <div className="marquee-content">
              <span>🚀 Web Development </span>
              <span>📈 Digital Marketing </span>
              <span>🎨 UI-UX Experience </span>
              <span>🛠️ Product Design </span>
              <span>📱 Mobile Solutions</span>
            </div>
          </div>
        </div>

      </div>


      <div className=" mt-5 me-2">
        <h1>Our Services</h1>
      </div>

      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="d-flex flex-row gap-4 ms-5 me-5">
          <div className="card text-center text-light p-4 card-container">
            <div className="icon-container">
              <img src={card1} alt="card-1" width="60px" height="60px" className="mb-4" />
              <h3 className="mb-5">Blockchain</h3>
              <p className="ms-3 me-3 mb-5">Pioneering technology solutions for blockchain innovation.</p>
            </div>
          </div>

          <div className="card text-center text-light p-4 card-container">
            <div className="icon-container">
              <img src={card2} alt="card-2" width="60px" height="60px" className="mb-4" />
              <h3 className="mb-5">Product Development</h3>
              <p className="ms-3 me-3 mb-5">Innovating technology solutions for seamless product development.
              </p>
            </div>
          </div>

          <div className="card text-center text-light p-4 card-container">
            <div className="icon-container">
              <img src={card3} alt="card-3" width="60px" height="60px" className="mb-4" />
              <h3 className="mb-5">Software Solutions</h3>
              <p className="ms-3 me-3 mb-5">Elevating businesses with innovative Software Solutions expertise.</p>
            </div>
          </div>

          <div className="card text-center text-light p-4 card-container">
            <div className="icon-container">
              <img src={card4} alt="card-4" width="60px" height="60px" className="mb-4" />
              <h3 className="mb-5">Apps</h3>
              <p className="ms-3 me-3 mb-5">Empowering Apps with Innovative Technological Solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
