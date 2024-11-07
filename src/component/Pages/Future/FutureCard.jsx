// FutureCard.js
import React from 'react';
import './Future.css';

const FutureCard = ({ title, description, imageUrl }) => {
  return (
    <div className="custom-future-card">
      <img src={imageUrl} alt={title} className="custom-future-card-img" />
      <div className="custom-future-card-content">
        <h3 className="custom-future-card-title">{title}</h3>
        <p className="custom-future-card-description">{description}</p>
      </div>
    </div>
  );
};

export default FutureCard;
