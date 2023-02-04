import React from "react";

const About = () => {
  return (
    <div>
      <section className="about">
        <div className="about-twix">
          <div className="video">
            <iframe
              width="727"
              height="438"
              src="https://www.youtube.com/embed/JiaFLOZsw3I"
              title="ingliz tili 0 DAN 3 OYDA mustaqil o'rganish ENG OSON usul"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="1"
            ></iframe>
          </div>
          <div className="text">
            <div className="box-text">
              <h3 className="title">about us</h3>
              <h1>
                <span>english</span> focus
              </h1>
              <h2>
                Bizda istalgan yonalishingizda <br /> ingliz tilini
                organishingiz mumkin
              </h2>
              <h3>Asosan</h3>
              <div className="xil">
                <a
                  href="!#"
                  class="btn-flip"
                  data-front="online"
                  data-back="go to about"
                ></a>
                <a
                  href="!#"
                  class="btn-flip"
                  data-front="offline"
                  data-back="go to about"
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div className="courses">
          <div className="course-twice">
            <div className="online cor">
              <div className="video">
                <iframe
                  width="100%"
                  height="409"
                  src="https://www.youtube.com/embed/9YeXU1TSYkM?list=PLqEpHfjCrk5Fwg5hSgMm3FTF6L9adbt_g"
                  title="Qanday qilib ingliz tilini o`rganish mumkin? Onlayn vebinar"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="card">
                <h1>online</h1>
                <p>
                  davomyligi: <span>1-level : 3oy</span>
                </p>
                <p>
                  kurs narxi 1oy: <span>390.000</span>
                </p>
                <p>
                  ustoz: <span>Farxod Hakimov</span>
                </p>
                <p>
                  lokatsia: <span>istalgan</span>
                </p>
              </div>
            </div>
            <div className="offline cor">
              <div className="video">
                <iframe
                  width="100%"
                  height="409"
                  src="https://www.youtube.com/embed/c_lnezsNhgs?list=PLqEpHfjCrk5Fwg5hSgMm3FTF6L9adbt_g"
                  title="English Focus endi o'quv markazmi ?"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="card">
                <h1>offline</h1>
                <p>
                  davomyligi: <span>1-level : 3oy</span>
                </p>
                <p>
                  kurs narxi 1oy: <span>390.000</span>
                </p>
                <p>
                  ustoz: <span>Farxod Hakimov</span>
                </p>
                <p>
                  lokatsia: <span>istalgan</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
