import React from "react";
import starIcon from "../images/star.png";

export default function Card(props) {
  const checkStatus = () => {
    if (props.openSpots === 0) {
      return "SOLD OUT";
    } else {
      return "AVAILABLE";
    }
  };

  return (
    <div className="card">
      <div className="card-status">{checkStatus()}</div>
      <img
        src={require(`../images/${props.coverImg}`)}
        alt="Card experiences"
        className="card-image"
      />

      <div className="rating-container">
        <img src={starIcon} alt="Star icon" className="card-star" />
        <p className="card-rating">
          {props.stats.rating.toFixed(1)}
          <span className="rating-details rater-total">
            ({props.stats.reviewCount})
          </span>
          <span className="rating-details">‧</span>
          <span className="rating-details location">{props.location}</span>
        </p>
      </div>
      <p className="card-text">{props.title}</p>
      <p className="card-pricing">
        <span>From ${props.price} </span>/ person
      </p>
    </div>
  );
}
