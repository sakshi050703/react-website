import React from 'react'
import '../Pages/Conta.css'
import logo from '../Assest/logo-light.png'
import { NavLink, Outlet } from 'react-router-dom'
const Contact = () => {
  return (
    <div className="app">
      {/* Contact Section */}
      <section className="contact-section text-white text-center py-5">
        <div className="container">
          <p className="small-heading">• CONTACT US</p>
          <h1 className="display-4 fw-bold">Let's make your brand brilliant!</h1>
          <p className="mt-3 text-light">
            Get in touch with Digital Boost Media today to discover how our innovative technology solutions can propel your business forward.
          </p>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="get-in-touch py-5">
        <div className="container">
          <div className="row">
            {/* Contact Details */}
            <div className="col-md-6">
              <button className="btn btn-outline-light mb-3">GET IN TOUCH</button>
              <h2 className="fw-bold">Let's get in touch with us.</h2>
              <p>If you would like to work with us or just want to get in touch, we’d love to hear from you!</p>
              <p className="fs-4 fw-bold text-white">+91-70283-40129</p>
              <p className="fs-4 fw-bold text-white">+17864380412</p>
              <div className="social-icons mt-3">
                <span>Facebook</span>   <span>Twitter</span>   <span>LinkedIn</span>   <span>Instagram</span>
              </div>
            </div>
            {/* Contact Form */}
            <div className="col-md-6">
              <form>
                <input type="text" className="form-control bg-dark text-white placeholder-white mb-3" placeholder="Name" />
                <input type="email" className="form-control bg-dark text-white placeholder-white mb-3" placeholder="Email" />
                <input type="text" className="form-control bg-dark text-white placeholder-white mb-3" placeholder="Subject" />
                <textarea className="form-control bg-dark text-white placeholder-white mb-5 p-2" placeholder="Message"></textarea>
                <button className="btn btn-dark w-25">Let's Talk</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer text-white py-4">
        <div className="container">
          <div className="row ">
            <div className="col-md-3 text-start">
              <h4>Address</h4>
              <p>Poonawala Fincorp, Mundhwa Rd, Koregaon Park Annexe,Pune</p>
              <p>Washington DC- Adam Morgan 1763 Columbia Rd NW, Washington, DC 20009.</p>
            </div>
            <div className="col-md-3 text-start">
              <h4>Say Hello</h4>
              <p className="text-decoration-underline">info@digitalboostmedia.in</p>
              <p className="fs-5 fw-bold text-decoration-underline">+91-70283-40129</p>
              <p className="fs-5 fw-bold text-decoration-underline">+17864380412</p>
            </div>
            <div className="col-md-3 text-start">
              <h4>Social</h4>
              <p>FACEBOOK</p>
              <p>TWITTER</p>
              <p>LINKEDIN</p>
              <p>INSTAGRAM</p>
            </div>
            <div className="col-md-3 text-start">
              <h4>Quick Links</h4>
              <p>HOME</p>
              <p>ABOUT</p>
              <p>SERVICES</p>
              <p>CONTACT</p>
            </div>
          </div>
        </div>
      </footer>


      <footer className="foote">
        <div className="container d-flex justify-content-between align-items-center py-3">
          {/* Left Side: Logo */}
          <div className="footer-logo">
            <NavLink to='/conta'>
              <img src={logo} alt="Digital Boost Media" className="logo-img" />
            </NavLink>
          </div>

          {/* Right Side: Copyright and Scroll-to-Top Button */}
          <div className="footer-right">
            <NavLink to='/home'>
              <p>© <a href="#" target="_blank" rel="noopener noreferrer">Digital Boost Media 2024</a></p>
            </NavLink>
            <button className="scroll-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              ⬆
            </button>
          </div>
        </div>
      </footer>

    </div>

  )
}

export default Contact