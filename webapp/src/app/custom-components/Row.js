import React, { useMemo } from "react";

export default function Row({ children: childrenProp }) {
  const children = useMemo(
    () =>
      childrenProp.map((child, index) => (
        <div className={`col-lg-${12 / childrenProp.length} grid-margin stretch-card`} key={index}>
          {child}
        </div>
      )),
    [childrenProp]
  );

  return <div className="row">{children}</div>;
}
