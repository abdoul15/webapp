import React, { useMemo } from "react";
import {Table} from "react-bootstrap";

function BasicTable({ header, data, dataProp, setSelected }) {
  // Create header
  const head = useMemo(() => header.map((item, index) => <th key={index}>{item}</th>), [header]);
  // Create content
  const content = useMemo(
    () =>
      data.map((item, index) => (
        <tr
          key={index}
          onClick={() => {
            setSelected(item);
          }}
        >
          {dataProp.map((prop, index) => (
            <td key={index}>{item[prop]}</td>
          ))}
        </tr>
      )),
    [data, dataProp]
  );

  return (
    <div className="card w-100" >
      <div className="card-body">
        <h4 className="card-title">Liste des sons disponibles</h4>
        <div className="table-responsive overflow-auto" style={{height : 300}}>
          <Table hover >
            <thead>
              <tr>{head}</tr>
            </thead>
            <tbody>            
              {content}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default BasicTable;
