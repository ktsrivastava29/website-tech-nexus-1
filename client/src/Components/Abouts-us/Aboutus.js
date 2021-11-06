import "./Aboutus.css"
import Team from './teams/Team';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
const Aboutus = () => {
     const styles = {
          fadeIn: {
            animation: 'x 1s',
            animationName: Radium.keyframes(fadeIn, 'fadeIn')
          }
        }
    return (
         <StyleRoot>
          <div className="container-About" style={styles.fadeIn}>
           <h1 className="head">ABOUT US </h1>
           <p className = "content-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perspiciatis eveniet sequi voluptatibus ab soluta quidem laboriosam ipsa saepe, excepturi pariatur dolor nesciunt accusantium commodi iusto quas nobis at sint et in tenetur! Odit maiores soluta nisi quos, placeat iste sapiente ratione temporibus. Dicta recusandae tenetur numquam repellendus doloribus culpa aperiam at vel repudiandae magni sint deserunt, minima aut quidem molestiae accusamus facere cupiditate velit quaerat reiciendis sunt ad ut accusantium officiis. Corporis suscipit voluptates eligendi modi, iste labore velit tenetur fugit esse doloribus distinctio at mollitia excepturi dolores quisquam laudantium ut deserunt adipisci pariatur? Nemo nulla dicta velit ab dolore at nihil magnam delectus omnis laborum provident voluptatibus, odit facilis deserunt pariatur distinctio dignissimos voluptas magni recusandae quia adipisci facere possimus illo quibusdam. Error molestias cupiditate ad quasi ullam! Natus sequi accusamus quam, officiis hic sapiente temporibus tempora voluptatum non obcaecati possimus et exercitationem nihil. Blanditiis animi porro deserunt rerum perspiciatis cupiditate incidunt culpa iure provident dolorum quae, cum corrupti autem, debitis eligendi quo. Unde, praesentium molestias alias vitae quasi cumque, ut iste quaerat minus accusantium dolor nemo harum corrupti aliquid voluptatibus consequatur deleniti tenetur aperiam! Reiciendis, ad eligendi excepturi quam, aliquam, in temporibus eius eos dicta hic rerum?
           
           </p>
           {/* <div className="link-read-more">
               <a href="/">READ MORE</a>
           </div> */}
           <div className="team_container">
                <Team/>
           </div>
          </div>
          </StyleRoot> 


     );
}
 
export default Aboutus;