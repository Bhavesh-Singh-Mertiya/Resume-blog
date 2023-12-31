import React from "react";

function index() {
  return (
    <>
      <section className="resume-section" id="projects">
        <div className="resume-section-content">
          <h2 className="mb-5">Projects</h2>

          {/*FreeD Perception */}
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h4 className="subheading mb-3">FreeD Perception</h4>{" "}
              <p>
                In this project I worked as a <b>fullstack</b> developer, where
                Tech Stack was ReactJs, Sql, NodeJs, Express. We used{" "}
                <b>CK Editor</b> for creating blog. Worked on{" "}
                <b>Notifications, multers </b> for pdf uploads on server,
                phpMyAdmin for DB access, sequlizer, migration, seeder, adminer
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">
                {" "}
                <a target="_blank" href="https://freedperception.com/">
                  Project URL
                </a>{" "}
              </span>
            </div>
          </div>

          {/*Quickspot */}
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h4 className="subheading mb-3">QuickSpot</h4>{" "}
              <p>
                It is a platform that facilitates booking for different spots,
                including properties, vehicles, etc. Quickspot aims to connect
                users that want to rent out space and spots to those who are
                looking for them. The app seamlessly supports different types of
                users and digitalizes booking experience. My role was Individual
                Reactjs Contributor, Created <b>step forms</b> for adding the
                spot, Product was in two Language English and Portugees. Used{" "}
                <b>Google Maps</b> for single and multiple pins, Many
                calculations like <b> payments, offers, referals </b>. Spooter
                adding its location in the application,This <b> 5 step form </b>{" "}
                was very tough and challenging manupulating the JSON data and
                adding conditions, selecting the Dates, Weekdays, Timings.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">
                {" "}
                <a target="_blank" href="http://quickspot.com.br/frontend/">
                  Project URL
                </a>{" "}
              </span>
            </div>
          </div>

          {/*GPS phase 2 DPPS */}
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h4 className="subheading mb-3">Digital Parking Permit System</h4>{" "}
              <p>
                Brief intro of project is that User can register and can choose
                any property for the parking. He can also invite his guest for
                15 days around. I was the individual frontend contributer where
                integrated all the api's with payment gateway - paypal for one
                time payment. Application contains user Registration flow where
                we stored the data in localStorage after 4 to 5 steps completion
                user will be registered, in these steps he can choose the
                property and Choose payment amount yearly or monthly.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">
                {" "}
                <a
                  target="_blank"
                  href="https://www.globalparkingservices.com/dpps/"
                >
                  Project URL
                </a>{" "}
              </span>
            </div>
          </div>

          {/*Jargao Analytics */}
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h4 className="subheading mb-3">Jargao Analytics</h4>{" "}
              <p>
                This project was challenging as it was an ongoing project in{" "}
                <b>NextJs</b>. This project was like <b>Jira</b>. My Role in
                this project was related to frontend functionality. Where
                Project manager can create tickets for the users or the working
                team. While creating task we can assing the ticket to any team
                mates. Where team mates can log time and can move the ticket
                status. All these functionality was performed by me in NextJs
                technology for server side rendering.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">
                {" "}
                <a target="_blank" href="https://jargaoanalytics.com/home">
                  Project URL
                </a>{" "}
              </span>
            </div>
          </div>

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
