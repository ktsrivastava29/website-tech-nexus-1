import React from 'react'
import './Navbar.css';
import { BsList } from 'react-icons/bs';
import image from './White.svg'
import { PinDropSharp } from '@material-ui/icons';


export default function Navbar(props) {
    const expand = () =>{
        const navList = document.querySelector("#navList");
        if(navList.style.height !== "60vh") navList.style.height = "60vh";
        else navList.style.height = "0vh";
    }
    // clickedhome ={()=>settorender('Home Page')}
    //    clickedaboutus = {()=>{settorender('About us')}}
    //    clickedcompetitionspage = {()=>{settorender('Competition Page')}}
    //    clickedsponsor ={()=>{settorender('Sponsor')}}
    return (
        <nav>
            <div id="logo">Tech <img src={image} alt="" /> Nexus</div>
            <div id="navList" className="">
                <div onClick = {props.clickedcompetitionpage} >Events</div>
                <div onClick = {props.clickedaboutus} >About</div>
                <div onClick = {props.clickedsponsor} >Sponsors</div>
                <div onClick = {expand} id="res-contact">Contact Us</div>
            </div>
            <div id="contactBtn">Contact Us</div>
            <div id="collapseBtn" onClick = {expand}><BsList /></div>
        </nav>
    )
}
