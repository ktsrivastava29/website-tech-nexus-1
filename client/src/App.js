import React,{useState,useEffect} from 'react';
import './App.css';
import Homepage from './Components/Home/Home';
import Aboutus from './Components/Abouts-us/Aboutus';
import CompetitionPage from './Components/CompetitionPage/CompetitionPage';
// import LoadingPage from './Components/Loadingpage/Loading';
import Sponsor from './Components/Sponsors/Sponsors';
import Button from '@material-ui/core/Button';
import svideo from './Components/Home/Assets/startvideo.mp4'
function App() {
  
  const [torender , settorender] = useState('start video');
  const [isMobile, setIsMobile] = useState(false)
 
//choose the screen size 

// create an event listener
useEffect(() => {
  if(window.innerWidth < 1024){
    settorender('Home Page')
  }
},[])

  return (
    
    <div className="App">
        {torender === 'start video'?<video className='startingvideobox' src = {svideo} alt='some description' onEnded={()=>{settorender('Home Page')}} autoPlay muted style={{zIndex:'1000',position:'absolute', width: '100vw'}}/>:null}
       {(torender==='Home Page')?<Homepage 
       clickedhome ={()=>settorender('Home Page')}
       clickedaboutus = {()=>{settorender('About us')}}
       clickedcompetitionspage = {()=>{settorender('Competition Page')}}
       clickedsponsor ={()=>{settorender('Sponsor')}}
       />
       :null}
       {torender==='About us'?<Aboutus/>:null}
       {torender==='Competition Page'?<CompetitionPage/>:null}
       {torender==='Sponsor'?<Sponsor/>:null}
       {torender!=='Home Page'?<div style={{position : 'fixed' , right: '0' , bottom :'0' , margin: '5px'}}>
        <Button onClick={()=>{settorender('Home Page')}} style={{color: 'white', background : 'rgba(0,0,0,0.5)'}} variant="contained" color="neutral">Home</Button>;
       </div>:null}
       <div style={{position : 'fixed' , right: '45%' , bottom :'0' , margin: '5px' , fontFamily:'monospace'}}>Under development</div>
    </div>
  );
}

export default App;
