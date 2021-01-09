import React from "react";
import { objToArray } from "./dataHandling";
import Entry from "./Entry";

const Entries = (props) => {
  return (
    <section name="Entries matching your query">
      {props.data &&
        props.data.length >= 0 &&
        props.data.map((q_and_a) => (
          <Entry
            question={q_and_a.question}
            answer={q_and_a.answer}
            kw={objToArray(q_and_a.keywords)}
            cats={objToArray(q_and_a.categories)}
          />
        ))}
    </section>
  );
};

export default Entries;
