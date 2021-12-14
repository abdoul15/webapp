import React from "react";
import Column from "../custom-components/Column";

export default function RetourApi({data}) {
  return (
    <Column>
      <h4>retour {data.nom}</h4>
      <div className="card">
        <div className="card-body">
          <p className="card-description">{data.transcription}</p>
          <blockquote>
            blockquote de {data.nom}
          </blockquote>
        </div>
      </div>
      
    </Column>
  );
}
