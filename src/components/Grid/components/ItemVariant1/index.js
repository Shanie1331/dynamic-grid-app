import React from "react";
import './styles.css'

const ItemVariant1 = ({ image, title, description, onClickItem }) => {
  return (
    <div className="grid-item tile" onClick={() => onClickItem()}>
      <img src={image} alt={title} className="item-image" />
      <div>
        <h3 className="item-title">{title}</h3>
        <p className="item-description">{description}</p>
      </div>
    </div>
  );
};

export default ItemVariant1;
