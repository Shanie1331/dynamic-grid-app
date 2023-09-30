import React from "react";
import "./styles.css";

const ItemVariant2 = ({ image, title, onClickItem }) => {
  return (
    <div className="grid-item plus-icon" onClick={() => onClickItem()}>
      <img src={image} alt={title} className="item-image" />
      <div>
        <h3 className="item-title">{title}</h3>
      </div>
      <div className="plus-icon-container">
        <div className="icon">+</div>
      </div>
    </div>
  );
};

export default ItemVariant2;
