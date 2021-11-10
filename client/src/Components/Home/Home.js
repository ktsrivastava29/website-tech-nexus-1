import React from 'react'
import Navbar from "../Navbar/Navbar"
import "./Home.css"

export default function Home (props) {
    // clickedhome ={()=>settorender('Home Page')}
    //    clickedaboutus = {()=>{settorender('About us')}}
    //    clickedcompetitionspage = {()=>{settorender('Competition Page')}}
    //    clickedsponsor ={()=>{settorender('Sponsor')}}
    return (
        <>
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
