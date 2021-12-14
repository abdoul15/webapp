import React from "react";
import {Form} from "react-bootstrap";

export default function TestAudioForm() {
  return (
    <div className="card">
      <div className="card-body">
        <h4>Lancer une analyse d'un fichier audio</h4>
        <p className="card-description"> Choisir un fichier audio au format '.mp3'.</p>
        <form className="forms-sample">
          <Form.Group>
            <label>Charger le fichier audio</label>
            <div className="custom-file">
              <label className="custom-file-label" htmlFor="audioFileInput">Charger</label>
              <Form.Control type="file" className="form-control visibility-hidden" id="audioFileInput" required />
            </div>
          </Form.Group>
          <Form.Group>
            <label htmlFor="audioFileInputText">Texte du fichier audio</label>
            <textarea className="form-control" id="audioFileInputText" rows="4"/>
          </Form.Group>
          <button type="submit" className="btn btn-primary mr-2">Submit</button>
        </form>
      </div>
    </div>
  );
}
