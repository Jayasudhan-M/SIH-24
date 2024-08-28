import React from 'react';
import './Card.css';

function Card({ type, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-icon">
        {type === 'png' && '📄'}
        {type === 'jpg' && '📄'}
        {type === 'pdf' && '📄'}
      </div>
      <div className="card-title">
        {type.toUpperCase()} Document
      </div>
    </div>
  );
}

export default Card;
