import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"
import bg from './bg-login.png';
import backgroundVideo from './bg.mp4'

function App() {
  return (
    <div className="App">
     <video autoPlay loop muted id='video'>
       <source src={backgroundVideo} type='video/mp4'/>
     </video>
   <Login />
    </div>
  );
}

export default App;
