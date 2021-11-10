import React, { useEffect } from "react";
import "./competitionDetail.css";
import tezos from "./assets/tezos.png";
import polygon from "./assets/polygon.png";
import celo from "./assets/celo.png";
import filecoin from "./assets/filecoin.png";
import devfolio from "./assets/devfolio.png";

const CompetitionDetail = (data) => {
  const { id, heading, subHeading, image, content } = data.data;

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
      {id === 1 ? (
        <div id="aboutCompetition">
          <div className="aboutCompetitionHeading">
            {heading}
            <br /> <p>{subHeading}</p>
          </div>
          <div className="aboutCompetitionDetails">
            <div className="details">
              <p>{content}</p>
              <div className="button">
                <div
                  className="apply-button"
                  data-hackathon-slug="vividhata-a-blend-of-ideas"
                  data-button-theme="dark-inverted"
                ></div>
              </div>
            </div>
            <div className="image">
              <img src={image} alt="delails" />
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
      ) : (
        <h1> Coming Soon! stay tuned</h1>
      )}
    </>
  );
};

export default CompetitionDetail;
