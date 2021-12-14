import React from "react";

export default function Paragraph({ text , height }) {
  return (
    <div className="card w-100 " style={{height : height}}>
      <div className="card-body">
        <p className="card-description">{text}</p>
      </div>
    </div>
  );
}
