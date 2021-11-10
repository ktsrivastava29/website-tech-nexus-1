import React, { useState } from "react";
import { Carousel } from "3d-react-carousal";
import "./competitionPage.css";
import { bounceIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import CompetitionDetail from "./CompetitionDetail";
import hackathonPoster from "./assets/hackathon.jpeg";
import comingSoon from "./assets/comingSoon.jpg";

let slides = [
  {
    id: 1,
    heading: "VIVIDHATA",
    subHeading: "A blend of ideas",
    image: hackathonPoster,
    content: `Introducing "Vividhata: A blend of ideas," a three-day National
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
              some of the world's most challenging problems.`,
  },
  {
    id: 2,
    heading: "Hackathon",
    subHeading: "",
    image: comingSoon,
    content: "content",
  },
  {
    id: 3,
    heading: "Hackathon",
    subHeading: "",
    image: comingSoon,
    content: "content",
  },
  {
    id: 4,
    heading: "Hackathon",
    subHeading: "",
    image: comingSoon,
    content: "content",
  },
  {
    id: 5,
    heading: "Hackathon",
    subHeading: "",
    image: comingSoon,
    content: "content",
  },
];

const CompetitionPage = () => {
  const [torender, settorender] = useState("CompetitionPage");
  const [data, setData] = useState("");

  const openEvent = (id) => {
    const output = slides.filter((slide) => slide.id === id);
    setData({
      image: output[0].image,
      id: output[0].id,
      heading: output[0].heading,
      subHeading: output[0].subHeading,
      content: output[0].content,
    });
    settorender("CompetitionDetail");
  };

  // const images = slides.map((slide) => {
  //   console.log(slide.props.src);
  //   return (
  //     <>
  //       <div key={slide.props.alt} className="competitionImage">
  //         <img
  //           src={slide.props.src}
  //           alt="An imag"
  //           onClick={() => openEvent(slide.props.alt)}
  //         />
  //       </div>
  //     </>
  //   );
  // });

  const images = slides.map((item) => {
    return (
      <>
        <div key={item.id} className="competitionImage">
          <img
            src={item.image}
            alt="An imag"
            onClick={() => openEvent(item.id)}
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
        <CompetitionDetail data={data} />
      )}
    </>
  );
};

export default CompetitionPage;
