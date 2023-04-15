import React from "react"

export default function Card(props) {
  return (
    <div className="container">
      <div className="card">
        <img src={props.item.imageUrl} className="img" />

        <div className="text-container">
          <div className="location-container">
            <i className="bx bxs-map"></i>
            <p className="location">{props.item.location}</p>
            <a target="_blank" href={props.item.googleMapsUrl} className="google-url">
              View on Google Maps
            </a>
          </div>
          <h1 className="title">{props.item.title}</h1>
          <p className="dates">
            {props.item.startDate} - {props.item.endDate}
          </p>
          <p className="description">{props.item.description}</p>
        </div>
      </div>
    </div>
  )
}
