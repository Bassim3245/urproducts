import React from "react";
import "./list.css";

const DetailsCard = ({ product }) => {
  return (
    <div className="card-product1">
      
      <img src={product.image} alt={product.name} style={{ width: "200px" }} />
      <h2>{product.name}</h2>
      
    </div>
  );
};

export default DetailsCard;
