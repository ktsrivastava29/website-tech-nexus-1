import React from 'react'
import Navbar from "../Navbar/Navbar"
import "./Home.css"

export default function Home () {
    return (
        <>
            <Navbar />
            <div id="home">
                <div id="tagline">
                    <h1>Meeting <span>the</span> ExtraOrdinary</h1>
                    <button>Register</button>
                </div>
            </div>
        </>
    )
}
