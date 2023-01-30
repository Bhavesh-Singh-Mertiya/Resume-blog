import React from "react";

function index() {
  return (
    <>
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>

          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">
                Lachoo Memorial College of Science & Tech
              </h3>
              <div className="subheading mb-3">
                Master of Computer Application (MCA)
              </div>
              <div>Computer Science</div>
              <p>GRADE: 85</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">July 2019 - August 2021</span>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">
                Lachoo Memorial College of Science & Tech
              </h3>
              <div className="subheading mb-3">
                Bachelore of Computer Application (BCA)
              </div>
              <div>Computer Science</div>
              <p>GRADE: 75</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">July 2016 - August 2019</span>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">St. Anne's School Jodhpur</h3>
              {/* <div className="subheading mb-3">Technology Magnet Program</div> */}
              <div>(1st to 12th Class)</div>
              {/* <p>GPA: 3.56</p> */}
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">August 2004 - May 2016</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
}

export default index;
