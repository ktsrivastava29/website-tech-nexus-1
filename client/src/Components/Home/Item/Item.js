import React from "react";
import "./Item.css";

const Item = ({ content }) => {
  return (
    <div className="content">
      <div className="line">
          <div className="slope"></div>
      </div>
      <div className="circle"></div>
      <div className="text">{content}
      <div className="border"></div></div>
      <div className="current"></div>
    </div>
  );
};

export default Item;
