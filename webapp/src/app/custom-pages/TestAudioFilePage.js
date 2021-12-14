import React from 'react';
import TestAudioForm from "../custom-components/TestAudioForm";
import Row from "../custom-components/Row";
import RetourApi from "../custom-components/RetourApi";
import Column from "../custom-components/Column";

export default function TestAudioFilePage() {
  const data = {
    "aws": {
      "score": "98",
      "transcription": "Texte du retour d'AWS.",
    },
    "azure": {
      "score": "99",
      "transcription": "Texte du retour d'Azure.",
    },
    "google": {
      "score": "97",
      "transcription": "Texte du retour de Google.",
    },
  }

  return (
    <>
      <Column>
        <TestAudioForm/>
        <></>
      </Column>
      <Row>
        <RetourApi data={data.aws}/>
        <RetourApi data={data.google}/>
        <RetourApi data={data.azure}/>
      </Row>
    </>
  );
}