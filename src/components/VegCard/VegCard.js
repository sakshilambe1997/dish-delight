import React, { useState } from 'react'
import "./VegCard.css"
import ImgHeartUnfilled from "./heart-unfilled.png"
import ImgHeartFilled from "./heart-filled.png"
import ImgClock from "./clock.png"
import Button from "./../Button/Button"
import {Link} from 'react-router-dom';

function VegCard({ id,title, image, description, time }) {
    const [liked, setLiked] = useState(false)

    return (
        <div className="card-container">
            <img 
                src={liked ? ImgHeartFilled : ImgHeartUnfilled} 
                className="like-image" 
                onClick={() => {
                    setLiked(!liked)
                }} 
            />
            <img src={image} className="card-image" />

            <h1 className="card-title">{title}</h1>

            <p className="card-disciption">{description.substring(0, 150)}...</p>

            <div className="time-container">
                <img src={ImgClock} className="img-clock" />
                <span className="time">{time}</span>
            </div>

            <Link className="category-card-button" to={`/recipe/${id}`} >
            
                <Button text={"Know More"} />
            </Link>
        </div>
    )
}

export default VegCard