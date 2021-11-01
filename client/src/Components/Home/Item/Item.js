import React from "react";
import "./Item.css";

const Item = ({ content,clicked }) => {
  return (
    <div 
      onClick={()=>{
        if(content !=='Events' && content !== 'Projects' && content !=='Contacts')
        clicked()
      }
    } 
    className="content">
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
