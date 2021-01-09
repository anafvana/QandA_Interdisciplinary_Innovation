import "./App.css";

//Importing components
import Header from "./components/Header";
import Entries from "./components/Entries";
import Search from "./components/Search";
import { useEffect, useState } from "react";

function App() {
  const getData = () => {
    fetch("/entries")
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

  /* console.log("All entries:");
  console.log(data);
  console.log("Selected entries: ");
  console.log(selectedEntries);
 */

  return (
    <div className="App">
      <Header />
      <main>
        <Search
          allEntries={data}
          selectedEntries={selectedEntries}
          entrySelector={entrySelector}
        />
        <Entries data={selectedEntries} />
      </main>
    </div>
  );
}

export default App;
