import React, { useState } from "react";
import { Carousel } from "3d-react-carousal";
import "./competitionPage.css";
import { bounceIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import CompetitionDetail from "./CompetitionDetail";
import hackathonPoster from "./assets/hackathon.jpg";

let slides = [
  <img src={hackathonPoster} alt="" />,
  <img
    src="https://previews.123rf.com/images/vasilyrosca/vasilyrosca1710/vasilyrosca171000084/88190043-electro-party-music-night-poster-template-electro-style-concert-disco-party-event-invitation-.jpg"
    alt="2"
  />,
  <img
    src="https://previews.123rf.com/images/vasilyrosca/vasilyrosca1710/vasilyrosca171000084/88190043-electro-party-music-night-poster-template-electro-style-concert-disco-party-event-invitation-.jpg"
    alt="3"
  />,
  <img
    src="https://previews.123rf.com/images/vasilyrosca/vasilyrosca1710/vasilyrosca171000084/88190043-electro-party-music-night-poster-template-electro-style-concert-disco-party-event-invitation-.jpg"
    alt="4"
  />,
  <img
    src="https://previews.123rf.com/images/vasilyrosca/vasilyrosca1710/vasilyrosca171000084/88190043-electro-party-music-night-poster-template-electro-style-concert-disco-party-event-invitation-.jpg"
    alt="5"
  />,
];

const CompetitionPage = () => {
  const [torender, settorender] = useState("CompetitionPage");

  const openEvent = (id) => {
    console.log(id);
    settorender("CompetitionDetail");
  };

  const images = slides.map((slide) => {
    console.log(slide.props.src);
    return (
      <>
        <div key={slide.props.alt} className="competitionImage">
          <img
            src={slide.props.src}
            alt="An imag"
            onClick={() => openEvent(slide.props.alt)}
          />
        </div>
      </>
    );
  });

  const styles = {
    bounceIn: {
      animation: "x 1s",
      animationName: Radium.keyframes(bounceIn, "bounceIn"),
    },
  };
  return (
    <>
      {torender === "CompetitionPage" ? (
        <StyleRoot>
          <div id="competitions" style={styles.bounceIn}>
            <div className="headingLabel">COMPETITIONS</div>
            <Carousel slides={images} autoplay={false} />
          </div>
        </StyleRoot>
      ) : (
        <CompetitionDetail />
      )}
    </>
  );
};

export default CompetitionPage;
