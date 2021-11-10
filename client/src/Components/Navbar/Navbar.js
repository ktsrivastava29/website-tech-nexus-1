import React from 'react'
import './Navbar.css';
import { BsList } from 'react-icons/bs';
import image from './White.svg'


export default function Navbar() {
    const expand = () =>{
        const navList = document.querySelector("#navList");
        if(navList.style.height !== "60vh") navList.style.height = "60vh";
        else navList.style.height = "0vh";
    }
    return (
        <nav>
            <div id="logo">Tech <img src={image} alt="" /> Nexus</div>
            <div id="navList" className="">
                <div onClick = {expand} >Events</div>
                <div onClick = {expand} >About</div>
                <div onClick = {expand} >Sponsors</div>
                <div onClick = {expand} id="res-contact">Contact Us</div>
            </div>
            <div id="contactBtn">Contact Us</div>
            <div id="collapseBtn" onClick = {expand}><BsList /></div>
        </nav>
    )
}
