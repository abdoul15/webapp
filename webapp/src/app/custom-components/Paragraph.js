import React from "react";

export default function Paragraph({ text }) {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-description">{text}</p>
      </div>
    </div>
  );
}
