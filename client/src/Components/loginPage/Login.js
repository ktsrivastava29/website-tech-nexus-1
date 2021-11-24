import React from 'react';
import backgroundVideo from './Assets/bg.m4v'
import "./Login.css"

function Login() {
  return(
   <>
   {/* <video autoPlay loop muted id='video'>
       <source src={backgroundVideo} type='video/mp4'/>
     </video> */}
     <div className="videobox">
                <video 
                src={backgroundVideo} 
                
                autoPlay={true}
                muted
                loop></video>
            </div>
  <div id="loginform">

  <FormHeader title="LOG IN" />
  <Form />
  <OtherMethods />
</div></>
);
}
export default Login;



// class LoginForm extends React.Component{
//   render(){
//     return(
//       <div id="loginform">
//         <FormHeader title="Login" />
//         <Form />
//         <OtherMethods />
//       </div>
//     )
//   }
// }

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
   <div>
     <FormInput description="UserEmail" placeholder="Example@gmail.com" type="text" />
     <FormInput description="Password" placeholder="Password" type="password"/>
     <p id="signText">forget password?</p>
     <FormButton title="LogIn"/>

     
   </div>
);

const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

const OtherMethods = props => (
    <div>
  <div id="alternativeLogin">
    <label>SignIn Using</label>
    <div id="iconGroup">
      <Facebook />
      <Twitter />
      <Google />
   
  </div>
  </div>
  <p class="accountSignup">Do not have an account?</p>
  <p class="accountSignup">SignUp here</p>
  </div>
);

const Facebook = props => (
  <a href="#" id="facebookIcon"></a>
);

const Twitter = props => (
  <a href="#" id="twitterIcon"></a>
);

const Google = props => (
  <a href="#" id="googleIcon"></a>
);
