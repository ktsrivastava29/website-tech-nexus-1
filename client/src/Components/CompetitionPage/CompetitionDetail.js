import React, { useEffect } from "react";
import "./competitionDetail.css";
import tezos from "./assets/tezos.png";
import polygon from "./assets/polygon.png";
import celo from "./assets/celo.png";
import filecoin from "./assets/filecoin.png";
import devfolio from "./assets/devfolio.png";
import hackathonPoster from "./assets/hackathon.jpg";

const CompetitionDetail = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div id="aboutCompetition">
        <div className="aboutCompetitionHeading">HACKATHON</div>
        <div className="aboutCompetitionDetails">
          <div className="details">
            <p>
              Introducing "Vividhata: A blend of ideas," a three-day National
              Level Hackathon, and "Imprenditoria: Innovation on Point," an idea
              incubation event where participants would solve real-world
              industrial challenges. The problem statements would be made
              public, which would have ramifications across all engineering
              fields. Knowing that creativity has no bounds, we devised 5-5
              real-world problems for the hackathon and idea incubation to
              provide a space for all technical professionals to let their
              creative ideas flow! Creativity is the new currency in town, thus
              new enterprises with novel ideas are welcomed. In an open
              exhibition, the hackathon models and ideas will be shown, and we
              will have our winners. So be ready, for a history of creativity is
              waiting for you to extend your horizons by providing solutions to
              some of the world's most challenging problems.
            </p>
            <div className="button">
              <div
                className="apply-button"
                data-hackathon-slug="vividhata-a-blend-of-ideas"
                data-button-theme="dark-inverted"
              ></div>
            </div>
          </div>
          <div className="image">
            <img src={hackathonPoster} alt="delails" />
          </div>
        </div>
        <div className="sponsors">
          <h4>Golden Sponsor</h4>

          <div className="gold">
            <a href="https://devfolio.co/home/" target="_blank">
              <img src={devfolio} alt="" />
            </a>
          </div>
          <h5>Silver Sponsors</h5>
          <div className="silver">
            <a href="https://tezos.com/" target="_blank">
              <img src={tezos} alt="" />
            </a>
            <a href="https://filecoin.io/" target="_blank">
              <img src={filecoin} alt="" />
            </a>
            <a href="https://polygon.technology/" target="_blank">
              <img src={polygon} alt="" />
            </a>
            <a href="https://celo.org/" target="_blank">
              <img src={celo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompetitionDetail;
