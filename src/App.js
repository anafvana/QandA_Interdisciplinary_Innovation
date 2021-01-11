import "./App.css";

//Importing components
import Header from "./components/Header";
import Entries from "./components/Entries";
import Search from "./components/Search";
import { useEffect, useState } from "react";

function App() {
  const getData = () => {
    fetch("https://ingrids.space:1323/entries")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((d) => {
        setData(d);
        entrySelector(d);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);
  const [data, setData] = useState([]);

  const [selectedEntries, entrySelector] = useState([]);
  const [selectedKeywords, setKeywords] = useState([]);
  const [selectedCategory, setCategory] = useState(null);

  /* console.log("All entries:");
  console.log(data);
  console.log("Selected entries: ");
  console.log(selectedEntries); */

  return (
    <div className="App">
      <Header />
      <main>
        <Search
          allEntries={data}
          entrySelector={entrySelector}
          selectedCategory={selectedCategory}
          setCategory={setCategory}
          selectedKeywords={selectedKeywords}
          setKeywords={setKeywords}
        />
        <Entries data={selectedEntries} />
      </main>
    </div>
  );
}

export default App;
