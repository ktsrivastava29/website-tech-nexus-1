import React from "react";
import "./competitionDetail.css";
import tezos from "./assets/tezos.png";
import polygon from "./assets/polygon.png";
import celo from "./assets/celo.png";
import filecoin from "./assets/filecoin.png";
import devfolio from "./assets/devfolio.png";

const CompetitionDetail = () => {
  return (
    <div id="aboutCompetition">
      <div className="aboutCompetitionHeading">HACKATHON</div>
      <div className="aboutCompetitionDetails">
        <div className="details">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            reprehenderit sed unde consectetur ab! Natus minus libero ratione
            recusandae suscipit voluptatum nulla temporibus magni at, ut quaerat
            placeat vel dolor? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae reprehenderit sed unde consectetur ab!
            Natus minus libero ratione recusandae suscipit voluptatum nulla
            temporibus magni at, ut quaerat placeat vel dolor?
          </p>
          <button>ENTER THE COMPETITION</button>
        </div>
        <div className="image">
          <img
            src="https://previews.123rf.com/images/vasilyrosca/vasilyrosca1710/vasilyrosca171000084/88190043-electro-party-music-night-poster-template-electro-style-concert-disco-party-event-invitation-.jpg"
            alt="delails"
          />
        </div>
      </div>
      <div className="sponsors">
        <img src={tezos} alt="" />
        <img src={filecoin} alt="" />
        <img src={devfolio} alt="" />
        <img src={polygon} alt="" />
        <img src={celo} alt="" />
      </div>
    </div>
  );
};

export default CompetitionDetail;
