import React from "react";

function index() {
  return (
    <>
      <section className="resume-section" id="projects">
        <div className="resume-section-content">
          <h2 className="mb-5">Projects</h2>

          {/*ABRTL My First Project, in Company */}
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h4 className="subheading mb-3">
                ABRTL (AI Based Reporting Tool)
              </h4>{" "}
              <p>
                <b>Very First Project in Company</b> of my life, This project
                was very challenging task for me and a new pathway to learn and
                grow in my carrer. In this project I worked as a ReactJs
                Developer where I performed all the functionality related tasks.
                I created the project from scratch using create-react-app,
                created routings, Private and Public components, used S3 bucket
                for uploading Images and Recordings on the bucket. Used
                React-chartJS-2 for creating donughts in the project.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">
                {" "}
                <a target="_blank" href="https://www.listenportal.com/">
                  Project URL
                </a>{" "}
              </span>
            </div>
          </div>

          {/* My First Project */}
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h4 className="subheading mb-3">Certificates</h4>{" "}
              <p>
                <b>Very First Project</b> of my life, When I satarted learning
                react from youtube and udemy courses then I realised that I
                should make my own Project to show case in my Resume. <br />I
                created this project on react used Html, css, bootstrap for
                creating this application static. I also learned how to create
                git repository, how to{" "}
                <b>deploy website live using Git, with free off cost</b>.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">
                {" "}
                <a
                  target="_blank"
                  href="https://bhavesh-singh-mertiya.github.io/certificates/"
                >
                  Project URL
                </a>{" "}
              </span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
}

export default index;
