import React from "react"
import Navbar from "./components/Navbar"
import Imagegrid from "./components/Imagegrid"
import Title from "./components/Title"
import Card from "./components/Card"
import data from "./data.js"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    const card= data.map( info=>{
        return <Card
            key={info.id}
            info={info}
        />
    } 
    )
    
    return (
        <div>
        <Navbar/>
        <Imagegrid/>
        <Title/>
            <section className="cards-list">
            {card}
            </section>
        </div>
    )
}