import React from "react";
import "./css/CoffeeCard.css";

function CoffeeCard({ coffee }) {
  return (
    <div className="coffee-card" >
      <h2>{coffee.name}</h2>
      <p>{coffee.description ? coffee.description : "No description available."}</p>
      <p><strong>Weight:</strong> {coffee.amount_in_grams}g</p>
      <p><strong>Price:</strong> ${coffee.price}</p>
    </div>);
}

export default CoffeeCard;
