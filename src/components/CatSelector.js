//import './CatSelector.css'

import { useEffect, useState } from "react";
import { objToArray } from "./Questions";

const CatSelector = () => {
  const getData = () => {
    fetch("/cats")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((d) => {
        d = objToArray(d);
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
    <div>
      <label htmlFor="categories" className="propTitle">
        Choose a category
      </label>
      <br></br>
      <select name="categories" id="cat">
        {data &&
          data.length >= 0 &&
          data.map((c) => <option value={c}>{c}</option>)}
      </select>
    </div>
  );
};

export default CatSelector;
