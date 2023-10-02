import React from "react";
import GridItem from "./components/GridItem";

const Grid = (props) => {
  const { title, columns, items } = props || {};
  return (
    <>
      <div>
        <h3 className="item-title">{title}</h3>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        }}
      >
        {items && items.map((item) => <GridItem key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default Grid;
