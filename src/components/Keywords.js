import "./Keywords.css";

import React from "react";

const Keywords = (props) => {
  return (
    <div>
      <h6 className="propTitle">Keywords:</h6>
      <div>
        {props.kw.map((data) => (
          <div className="keyword">{data}</div>
        ))}
      </div>
    </div>
  );
};

export default Keywords;
