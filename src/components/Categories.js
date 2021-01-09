import "./Categories.css";

import React from "react";

const Categories = (props) => {
  return (
    <div>
      <h6 className="propTitle">Categories:</h6>
      <div className="categoriesContainer">
        {props.cat.map((data) => (
          <div className="category">{data}</div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
