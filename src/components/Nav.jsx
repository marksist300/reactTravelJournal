import React from "react"
import globeLogo from "../assets/globeLogo.svg"

export default function Nav(){
    return (
        <header>
            <nav className="nav-bar">
                <img src={globeLogo} alt="A small white logo of the globe" />
                <h1>My Travel Journal</h1>
            </nav>
        </header>
    )
}