import React from "react"

export default function TravelCard(props){
    return (
        <div>
            <article className="card-section">
                <div className="img-section">
                    <img src="" alt="" />
                </div>
                <div className="text-section">
                    <span className="country map-link-text"></span>
                    <a href="#" className="map-link-text"></a>
                    <h2 className="article-title-text"></h2>
                    <h4 className="date-text"></h4>
                    <p className="article-text"></p>
                </div>
            </article>
            <hr />
        </div>
    )
}