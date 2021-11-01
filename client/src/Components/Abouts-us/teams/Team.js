import './team.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Team = () => {
    return (
        <div className="our_team">
            <h1 className="team_title">
                OUR TEAM
            </h1>
            <div className="cards_list">

                <div className="card 1">

                    <div className="card_title ">
                        <p style={{fontSize: '0.3rem'}}> TEAM <br/> CORE</p>
                        
                    </div>
                    <a  className="social_links" href="/"><LinkedInIcon/></a>
                    <a className="social_links" href="/"><InstagramIcon/></a>
                      
                    
                </div>

                <div className="card 2">

                    <div className="card_title ">
                        <p style={{fontSize: '0.3rem'}}>TEAM <br/> PR</p>
                        
                    </div>
                    <a  className="social_links" href="/"><LinkedInIcon/></a>
                    <a className="social_links" href="/"><InstagramIcon/></a>
                </div>

                <div className="card 3">

                    <div className="card_title">
                        <p style={{fontSize: '0.3rem'}}> TEAM <br/> DESIGN </p>
                     
                    </div>
                    <a  className="social_links" href="/"><LinkedInIcon/></a>
                    <a className="social_links" href="/"><InstagramIcon/></a>
                </div>


                <div className="card 4">

                    <div className="card_title ">
                        <p style={{fontSize: '0.3rem'}}> TEAM <br/> WEBD</p>
                       
                    </div>
                    <a  className="social_links" href="/"><LinkedInIcon/></a>
                    <a className="social_links" href="/"><InstagramIcon/></a>
                </div>
                <div className="card 5">

                    <div className="card_title">
                        <p style={{fontSize: '0.3rem'}}> TEAM<br/> FINANCE</p>
                       
                    </div>
                    <a  className="social_links" href="/"><LinkedInIcon/></a>
                    <a className="social_links" href="/"><InstagramIcon/></a>
                </div>
                <div className="card 6">

                    <div className="card_title">
                        <p style={{fontSize: '0.3rem'}}> TEAM <br/> CONTENT <br/> WRITING</p>
                       
                    </div>
                    <a  className="social_links" id ="content-icons" href="/"><LinkedInIcon/></a>
                    <a className="social_links" id ="content-icons" href="/"><InstagramIcon/></a>
                </div>
                <div className="card 7">

                    <div className="card_title">
                        <p style={{fontSize: '0.3rem'}}>TEAM<br/> HACKETHON</p>
                       
                    </div>
                    <a  className="social_links" href="/"><LinkedInIcon/></a>
                    <a className="social_links" href="/"><InstagramIcon/></a>
                </div>

            </div>
        </div>




    );
}

export default Team;

