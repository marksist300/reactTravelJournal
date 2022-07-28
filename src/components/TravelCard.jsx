import React from "react"

export default function TravelCard(props){
    const {id, img, location, gmaps, title, date, description,} = props
    return (
        <div>
            <article className="card-section">
                <div className="img-section">
                    <img className="location-photo" src={img} alt="" />
                </div>
                <div className="text-section">
                    <span className="country map-link-text"><i class="fa-solid fa-location-dot"></i> {location}</span>
                    <a href={gmaps} className="map-link map-link-text">View on Google Maps</a>
                    <h2 className="article-title-text">{title}</h2>
                    <h4 className="date-text">{date}</h4>
                    <p className="article-text">{description}</p>
                </div>
            </article>
            <hr />
        </div>
    )
}