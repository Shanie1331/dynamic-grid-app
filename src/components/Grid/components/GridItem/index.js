import React from "react";
import { useNavigate } from "react-router-dom";
import DynamicElement from "../../../../ElementMapper";

const GridItem = ({ id, type, props }) => {
  const navigate = useNavigate();
    const {redirectType, redirectConfig} = props || {}
  const handleClick = () => {
    if (redirectType === "tab") {
      window.open(redirectConfig, "_blank");
    } else {
      navigate(redirectConfig);
    }
  };
  return (
      <DynamicElement type={type} {...props} onClickItem={handleClick}/>
  );
};

export default GridItem;
