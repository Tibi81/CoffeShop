import React, { useState, useEffect } from "react";
import './css/CoffeeCard.css';

function CoffeeCard({ coffee }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    
      fetch(`http://127.0.0.1:8000/api/tags/`)
        .then(response => response.json())
        .then(data => setTags(data))
        .catch(error => console.error('Error fetching tags:', error));
    
  }, [coffee.id]); 

  return (
    <div className="coffee-card">
      {/* Tags megjelenítése */}
      <div className="tags">
        {tags.length > 0 ? (
          tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag.id}
            </span>
          ))
        ) : (
          <span className="tag no-tag">No tags available</span>
        )}
      </div>

      {/* Kávé adatai */}
      <h2>{coffee.name}</h2>
      <p>{coffee.description || "No description available."}</p>
      <div>{coffee.amount_in_grams}g</div>
      <h3>{coffee.price} HUF</h3>
    </div>
  );
}

export default CoffeeCard;
