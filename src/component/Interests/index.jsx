import React from "react";

function index() {
  return (
    <>
      <section className="resume-section" id="interests">
        <div className="resume-section-content">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter,I love the sun in the winter I usualy sits a
            lot in terrace to take sun. During the warmer months here in
            Jodhpur, I enjoy early morning walk &#x1F304;, cycling &#x1F6B4; and
            free climbing. Last but not least my favourite Interest is
            gardening, I like to grow tree &#128525;.
          </p>
          <div className="resume-section-content">
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fa-solid fa-person-walking"></i>
              </li>

              <li className="list-inline-item">
                {/* <i className="fa-sharp fa-regular fa-hand-holding-seedling"></i> */}
              </li>

              <li className="list-inline-item">
                <i className="fa-solid fa-volleyball"></i>
              </li>
            </ul>
          </div>
          <p className="mb-0">
            When forced indoors,I Loved to play Table Tennis, Chess, Carom
            board. I am an aspiring chef, and I spend a large amount of my free
            time exploring the latest technology advancements in the front-end
            web development world.
          </p>
          <br />
          <div className="resume-section-content">
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="	fas fa-chess"></i>
              </li>
              <li className="list-inline-item">
                <i className="fas fa-table-tennis"></i>
              </li>

              <li className="list-inline-item"></li>
            </ul>
          </div>

          <br />
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
}

export default index;
