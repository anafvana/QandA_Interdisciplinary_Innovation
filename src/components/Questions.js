import React, { useEffect, useState } from "react";
import Entry from "./Entry";

function objToArray(data) {
  let a = [];
  data.forEach((element) => {
    a.push(element.str);
  });
  return a;
}

const Questions = () => {
  const getData = () => {
    fetch("/entries")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((d) => {
        console.log(d);
        setData(d);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);

  return (
    <section name="Questions matching your query">
      {data &&
        data.length >= 0 &&
        data.map((q_and_a) => (
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

export default Questions;
