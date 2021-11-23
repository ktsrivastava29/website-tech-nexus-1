import React from "react";
import style from "./sponsors.module.css";
import image from "./images/GFG.png";
import {fadeIn} from 'react-animations';
import Radium, {StyleRoot} from 'radium'; 
import celo from "./images/Celo.png"; 
import Devfolio from "./images/Devfolio.png";
import Filecoin from "./images/Filecoin.png"; 
import Polygon from "./images/Polygon.png";
import Tezos from "./images/Tezos.png";

const Sponsor = () => {
    const styles = {
        fadeIn: {
          animation: 'x 1s',
          animationName: Radium.keyframes(fadeIn, 'fadeIn')
        }
      }
    return (
        <StyleRoot>
        <>
            <div className={style.bd} style={styles.fadeIn}>
            <div className={style.imageContainerSponsor}>
                
            </div>
                <h1>SPONSORS</h1>
                <div className={style.MainSponsors}>
                    <div className={style.subHeading}><h2>GOLD SPONSORS</h2></div>
                    <div className={style.box}>
                        <a href="https://celo.org/">
                            <div className={style.front}>
                                <img src={celo} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Celo<br/>
                                    <span className={style.Type}>
                                        <i>()</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    </div>
                    <div className={style.MainSponsors}>
                    <div className={style.subHeading}><h2>SILVER SPONSORS</h2></div>
                    <div className={style.box}>
                        <a href="https://celo.org/">
                            <div className={style.front}>
                                <img src={celo} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Celo<br/>
                                    <span className={style.Type}>
                                        <i>()</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    </div>
                    <div className={style.MainSponsors}>
                    <div className={style.subHeading}><h2>TITLE SPONSOR</h2></div>
                    <div className={style.box}>
                        <a href="https://celo.org/">
                            <div className={style.front}>
                                <img src={celo} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Celo<br/>
                                    <span className={style.Type}>
                                        <i>()</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    </div>
                    <div className={style.subHeading}><h2>OTHER SPONSORS</h2></div>
                <div className={style.container}>
                
                    <div className={style.box}>
                        <a href="https://celo.org/">
                            <div className={style.front}>
                                <img src={celo} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Celo<br/>
                                    <span className={style.Type}>
                                        <i>()</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={style.box}>
                        <a href="https://devfolio.co/">
                            <div className={style.front}>
                                <img src={Devfolio} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    DevFolio<br/>
                                    <span className={style.Type}>
                                        <i>()</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={style.box}>
                        <a href="https://filecoin.io/">
                            <div className={style.front}>
                                <img src={Filecoin} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Filecoin<br/>
                                    <span className={style.Type}>
                                        <i>()</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={style.box}>
                        <a href="https://polygon.technology/">
                            <div className={style.front}>
                                <img src={Polygon} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Polygon<br/>
                                    <span className={style.Type}>
                                        <i>()</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={style.box} id={style["blank"]}></div>
                    <div className={style.box} id={style["blank"]}></div>
                    <div className={style.box}>
                        <a href="https://tezos.com/">
                            <div className={style.front}>
                                <img src={Tezos} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Tezos<br/>
                                    <span className={style.Type}>
                                        <i>()</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={style.box}>
                        <a href="#">
                            <div className={style.front}>
                                <img src={image} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Sponsor name<br/>
                                    <span className={style.Type}>
                                        <i>(sponsortype)</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={style.box}>
                        <a href="#">
                            <div className={style.front}>
                                <img src={image} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Sponsor name<br/>
                                    <span className={style.Type}>
                                        <i>(sponsortype)</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={style.box}>
                        <a href="#">
                            <div className={style.front}>
                                <img src={image} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Sponsor name<br/>
                                    <span className={style.Type}>
                                        <i>(sponsor type)</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={style.box} id={style["blank"]}></div>
                    <div className={style.box} id={style["blank"]}></div>
                    <div className={style.box}>
                        <a href="#">
                            <div className={style.front}>
                                <img src={image} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Sponsor name<br/>
                                    <span className={style.Type}>
                                        <i>(sponsortype)</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={style.box}>
                        <a href="#">
                            <div className={style.front}>
                                <img src={image} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Sponsor name<br/>
                                    <span className={style.Type}>
                                        <i>(sponsortype)</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={style.box}>
                        <a href="#">
                            <div className={style.front}>
                                <img src={image} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Sponsor name<br/>
                                    <span className={style.Type}>
                                        <i>(sponsortype)</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={style.box}>
                        <a href="#">
                            <div className={style.front}>
                                <img src={image} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Sponsor name<br/>
                                    <span className={style.Type}>
                                        <i>(sponsortype)</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={style.box} id={style["blank"]}></div>
                    <div className={style.box} id={style["blank"]}></div>
                    <div className={style.box}>
                        <a href="#">
                            <div className={style.front}>
                                <img src={image} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Sponsor name<br/>
                                    <span className={style.Type}>
                                        <i>(sponsortype)</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={style.box}>
                        <a href="#">
                            <div className={style.front}>
                                <img src={image} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Sponsor name<br/>
                                    <span className={style.Type}>
                                        <i>(sponsortype)</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={style.box}>
                        <a href="#">
                            <div className={style.front}>
                                <img src={image} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Sponsor name<br/>
                                    <span className={style.Type}>
                                        <i>(sponsortype)</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={style.box}>
                        <a href="#">
                            <div className={style.front}>
                                <img src={image} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Sponsor name<br/>
                                    <span className={style.Type}>
                                        <i>(sponsortype)</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={style.box} id={style["blank"]}></div>
                    <div className={style.box} id={style["blank"]}></div>
                    <div className={style.box}>
                        <a href="#">
                            <div className={style.front}>
                                <img src={image} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Sponsor name<br/>
                                    <span className={style.Type}>
                                        <i>(sponsortype)</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={style.box}>
                        <a href="#">
                            <div className={style.front}>
                                <img src={image} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Sponsor name<br/>
                                    <span className={style.Type}>
                                        <i>(sponsortype)</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={style.box}>
                        <a href="#">
                            <div className={style.front}>
                                <img src={image} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Sponsor name<br/>
                                    <span className={style.Type}>
                                        <i>(sponsortype)</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={style.box}>
                        <a href="#">
                            <div className={style.front}>
                                <img src={image} alt = "life" />
                            </div>
                            <div className={style.back}>
                                <div className={style.name}>
                                    Sponsor name<br/>
                                    <span className={style.Type}>
                                        <i>(sponsortype)</i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
        </StyleRoot>
    );
};

export default Sponsor;
