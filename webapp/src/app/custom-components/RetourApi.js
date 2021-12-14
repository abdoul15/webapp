import React from "react";
import Column from "../custom-components/Column";

export default function RetourApi({data}) {
  return (
    <Column>
      <div className="card">
        <div className="card-body">
          <p className="card-description">{data.transcription}</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <p className="card-description">
            <mark>{data.score}</mark>
            : score de fidélité de transcription.
          </p>
        </div>
      </div>
    </Column>
  );
}
