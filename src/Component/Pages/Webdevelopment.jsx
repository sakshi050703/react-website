import React from 'react'
import web1 from '../Assest/web-1.jpg'
import web2 from '../Assest/web-2.jpg'
const Webdevelopment = () => {
  return (
    <div className="container my-5">

      <div className="row mb-5">
        <div className="col-md-6">
          <div className="p-3">
            <div className="text-light mt-5">
              <h2 className="text-start ms-4 me-4 mt-5">
                Front-End Development
              </h2>
              <p className="text-start mt-2 ms-4 me-4">
                Our talented developers leverage cutting-edge technologies like React.js and Vue.js to craft bespoke front-end applications that are not only visually stunning but also scalable and easily maintainable.
              </p>
            </div>

            <div className="text-light mt-5">
              <h2 className="text-start ms-4 me-4 mt-3">
                Back-End Development
              </h2>
              <p className="text-start mt-2 ms-4 me-4">
                Unlock the potential of your web and mobile apps with our expert back-end developers. They create custom APIs, enabling seamless integration and reusability of back-end services across different front-end implementations.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="p-3  d-flex justify-content-center align-items-center">
            <img src={web1} alt="Example" className="img-fluid" style={{ width: "650px", height: "400px", objectFit: "cover" }} />
          </div>
        </div>
      </div>



      <div className="row mt-5">
        <div className="col-md-6">
          <img src={web2} alt="Example" className="img-fluid mt-5" style={{ width: "650px", height: "400px", objectFit: "cover" }} />
        </div>

        <div className="col-md-6">
          <div className="p-3  d-flex justify-content-center align-items-center">
            <div className="p-3">
              <div className="text-light mt-5">
                <h2 className="text-start ms-4 me-4">
                  UX/UI Web Design
                </h2>
                <p className="text-start mt-2 ms-4 me-4">
                  We are firm believers in functional design and delightful user experiences. With a team dedicated to web and mobile design, we craft user-centric interfaces that captivate users and ensure a smooth and engaging web experience.
                </p>
              </div>

              <div className="text-light mt-5">
                <h2 className="text-start ms-4 me-4 mt-3">
                  Maintenance & Support
                </h2>
                <p className="text-start mt-2 ms-4 me-4">
                  Already have a web app that needs ongoing maintenance and support? Tech Alchemy has got you covered. Our skilled developers assume responsibility for numerous applications, providing comprehensive website support, updates, and maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>







    </div>




  )
}

export default Webdevelopment