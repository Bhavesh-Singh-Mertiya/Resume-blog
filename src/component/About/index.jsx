import React from "react";

function index() {
  return (
    <>
      {" "}
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            Bhavesh
            <span className="text-primary"> Singh Mertiya</span>
          </h1>
          <div className="subheading mb-5">
            16E/7, CHB Street· JODHPUR, CO 342008· (+91) 905-716-3151·{" "}
            <a href="mailto:26bhaveshsingh@gmail.com">
              26bhaveshsingh@gmail.com
            </a>
          </div>
          <p className="lead mb-5 fs-5">
            I am <b>Software Engineer</b> at <b>Matellio India Pvt. Ltd. </b>{" "}
            with <b>3+</b> year of Experience.
            <br></br>I am experienced in leveraging <b>ReactJs</b> library to
            provide a robust and full fledge dynamic websites. We follow Agile
            methodology for the successfull delivery of our projects on time.
            Also familiar with backed services for creating{" "}
            <b> API's with NodeJS</b> .
          </p>
          <div className="social-icons">
            <a
              className="social-icon"
              target="_blank"
              href="https://in.linkedin.com/in/bhavesh-singh-mertiya"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="social-icon"
              target="_blank"
              href="https://github.com/Bhavesh-Singh-Mertiya"
            >
              <i className="fab fa-github"></i>
            </a>
            {/* <a className="social-icon" href="#!">
          <i className="fab fa-twitter"></i>
        </a> */}
            {/* <a className="social-icon" href="#!">
          <i className="fab fa-facebook-f"></i>
        </a> */}
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
}

export default index;
