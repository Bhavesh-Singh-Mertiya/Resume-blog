import React from "react";

function index() {
  return (
    <>
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>

          {/* Matellio Experience */}
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Web Front End Engineer</h3>
              <div className="subheading mb-3">Matellio India Pvt. Ltd.</div>
              <p>
                Working as a Front End Engineer level II on ReactJs technology
                on multiple projects. We create robust and dynamic user friendly
                applications. We use latest tools and techniques in our ReactJs
                applications like Redux, context API's, Formik, Yup,
                lazyLoading, React-select, react-router-doms and many more to
                make our application very fast.
                <br />
                We follow Agile methodology approach in our projects, we use
                Jira Atlassian software to create sprint task and tickets. Each
                sprint is of 10 days and start of sprint all tickets and
                estimations our done.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">January 2021 - Present</span>
            </div>
          </div>

          {/* SWPL intern */}
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Student Intern</h3>
              <div className="subheading mb-3">SWPL</div>
              <p>
                My profile in this company was not specific to any particular
                area we used to do Connect with people, branding the courses of
                the company, connecting with new students, making Posters in
                Canvas. I learned how to connect with people how to work in a
                student community. Creating new ideas to take the company at
                next level. Creating and adding new members to the community for
                better growth.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">
                Octomber 2020 - September 2020
              </span>
            </div>
          </div>

          {/* InitCoders intern*/}
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Web Developer Intern</h3>
              <div className="subheading mb-3">InitCoders</div>
              <p>
                Work as a Intern Web dev, where i learned how to develop static
                web pages using HTML, CSS and Bootstrap. I worked as a Fullstack
                dev on Ruby On Rails (ROR) Technology. Learned how to work on
                Model View Controller (MVC) based architecture. I experienced
                how the company works on the projects what were the tools and
                technologies we should learn to grow in our carrer.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">October 2019- December 2019</span>
            </div>
          </div>

          {/* <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">Web Design Intern</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits. Dramatically visualize customer directed
                convergence without revolutionary ROI.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">September 2008 - June 2010</span>
            </div>
          </div> */}
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
}

export default index;
