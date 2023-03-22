import logo from "./logo.svg";
import "./assets/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import profile from "../src/assets/img/profile1.jpeg";
import About from "../src/component/About";
import Education from "../src/component/Education";
import Skills from "./component/Skills";
import Interests from "./component/Interests";
import Awards from "./component/Awards";
import Experience from "./component/Experience";
import Projects from "./component/Projects";

function App() {
  return (
    <>
      {/* <!-- Navigation--> */}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">BHAVESH SINGH MERTIYA</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={profile}
              alt="..."
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">
                Interests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#awards">
                Awards
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!-- Page Content--> */}
      <div className="container-fluid p-0">
        <About />

        <Experience />

        <Projects />

        <Education />

        <Skills />

        <Interests />

        <Awards />
      </div>
      {/* <!-- Bootstrap core JS--> */}
      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script> */}
      {/* <!-- Core theme JS--> */}
      {/* <script src="js/scripts.js"></script> */}
    </>
  );
}

export default App;
