import React from "react"

export default function TravelCard(props){
    const {id, img, location, gmaps, title, date, description,} = props
    return (
        <div>
            <article className="card-section">
                <div className="img-section">
                    <img src={img} alt="" />
                </div>
                <div className="text-section">
                    <span className="country map-link-text">{location}</span>
                    <a href="#" className="map-link-text">{gmaps}</a>
                    <h2 className="article-title-text">{title}</h2>
                    <h4 className="date-text">{date}</h4>
                    <p className="article-text">{description}</p>
                </div>
            </article>
            <hr />
        </div>
    )
}