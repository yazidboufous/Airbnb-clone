import React from "react"

export default function Card(props) {
    
    let badgeText
    if (props.info.openSpots===0){
        badgeText="Sold Out"
    } else if (props.info.location === "Online"){
        badgeText="Online"
    }

    
    return (
        <div className="card">
        
        { badgeText && <div className="card--badge"> {badgeText} </div> }
        
        <img className="card-img" src={`../images/${props.info.coverImg}`}/>
        
            <div className="card-text">
            
                <div className="rating">
                    <img src="../images/star.png"/>
                    <span>{props.info.stats.rating} ({props.info.stats.reviewCount}). {props.info.location}</span> 
                </div>
                       
                <p>{props.info.title}</p>
                <h1> From ${props.info.price}/Person</h1>
                
            </div>
            
        </div>
    )
}