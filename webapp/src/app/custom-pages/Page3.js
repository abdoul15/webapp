import React, { useState } from "react";
import BasicTable from "../custom-components/BasicTable.js";
import Paragraph from "../custom-components/Paragraph.js";
import RetourApi from "../custom-components/RetourApi.js";
import BanqueSons from "./test.json";

export default function Page3() {
  const data = {
    aws: {
      transcription: "Texte du retour d'AWS.",
      nom : "AWS"
    },
    azure: {
      transcription: "Texte du retour d'Azure.",
      nom : "Azure"
    },
    google: {
      transcription: "Texte du retour de Google.",
      nom : "Google"
    },
  };

  const [selected, setSelected] = useState(BanqueSons[0]);

  const header = [
    "Nom",
    "Origine",
    "Compression",
    "Type",
    "Duree",
    "Play/Pause",
  ];
  const dataProp = ["nom", "origine", "compression", "type", "duree"];
  return (
    <div className="col-12">
      <div className="row col-12 my-5">
        <div className="col-8">
          <BasicTable
            header={header}
            data={BanqueSons}
            dataProp={dataProp}
            setSelected={setSelected}
            />
       </div>

          <div className="col-4 h-100">
            <Paragraph text={selected.text} height={400} />
          </div>
      </div>

      

      <div className="row col-12 my-5">
        <div className="col-4">
          <RetourApi data={data.aws} />
        </div>
        <div className="col-4">
          <RetourApi data={data.google} />
        </div>
        <div className="col-4">
          <RetourApi data={data.azure} />
        </div>
      </div>

      <div className="row col-12 my-5" >
      <Paragraph text={selected.text} height={"auto"} />
      </div>
    </div>
  );
}
