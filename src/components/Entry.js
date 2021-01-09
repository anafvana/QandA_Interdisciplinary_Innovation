import "./Entry.css";

import React from "react";

import Keywords from "./Keywords";
import Categories from "./Categories";

const Entry = (props) => {
  return (
    <article tabIndex="0">
      <div className="questWrapper">
        <h4>Question: {props.question}</h4>
        <Categories cat={props.cats} />
      </div>
      <p>Answer: {props.answer}</p>
      <Keywords kw={props.kw} />
    </article>
  );
};

export default Entry;
