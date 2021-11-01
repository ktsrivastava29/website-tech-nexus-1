import Navbar from "./Navbar/Navbar";
import Item from "./Item/Item";
import SocialLink from "./SocialLinks/SocialLink";
import sample from "./Media/home.mp4";

import "./Home.css";

function Home(props) {
  return (
    // clickedhome ={handlehome}
    //    clickedaboutus = {handleaboutus}
    //    clickedcompetitionspage = {handlecomp}
    //    clickedsponsor ={handlesponsor}
    <>
        <div id="home">
          <Navbar />
          <div className="contents">
            <Item content="Events" />
            <Item content="Projects" />
            <Item clicked = {()=>{props.clickedcompetitionspage()}} content="Competitions" />
            <Item clicked = {()=>{props.clickedsponsor()}} content="Sponsors" />
            <Item clicked = {()=>{props.clickedaboutus()}}  content="About Us" />
            <Item clicked = {()=>{props.clickedcontacts()}} content="Contacts" />
          </div>
          <div id="footer">
            <div id="register-btn">
              <div>REGISTER</div>
            </div>
            <SocialLink />
          </div>
        </div>
      <video id="background" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
    </>
  );
}

export default Home;
