import React, { useState } from "react";
import BasicTable from "../custom-components/BasicTable.js";
import Paragraph from "../custom-components/Paragraph.js";
import Row from "../custom-components/Row.js";
import BanqueSons from "./test.json";

export default function Page3() {

  const [selected, setSelected] = useState(BanqueSons[0]);

  const header = ["Nom", "Origine", "Compression", "Type", "Duree", "Play/Pause"];
  const dataProp = ["nom", "origine", "compression", "type", "duree"];
  return (
      <Row>
        <BasicTable header={header} data={BanqueSons} dataProp={dataProp} setSelected={setSelected} />
        <Paragraph text={selected.text} />
      </Row>
  );
}
