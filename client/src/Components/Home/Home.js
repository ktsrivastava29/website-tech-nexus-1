import React from 'react'
import Navbar from "../Navbar/Navbar"
import "./Home.css"
import homepagevideo from './Assets/homepagevideo.mp4';
export default function Home (props) {
    // clickedhome ={()=>settorender('Home Page')}
    //    clickedaboutus = {()=>{settorender('About us')}}
    //    clickedcompetitionspage = {()=>{settorender('Competition Page')}}
    //    clickedsponsor ={()=>{settorender('Sponsor')}}
    return (
        <>
            <div className="video-container">
            <video src = {homepagevideo} alt='some description' autoPlay muted loop/>
            </div>
            <Navbar clickedaboutus = {props.clickedaboutus} clickedcompetitionpage = {props.clickedcompetitionspage} clickedsponsor = {props.clickedsponsor} />
            <div id="home">
                <div id="tagline">
                    <h1>Meeting <span>the</span> ExtraOrdinary</h1>
                    <button>Register</button>
                </div>
            </div>
        </>
    )
}
