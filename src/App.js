import './App.css';

//Importing components
import Header from './components/Header'
import Questions from './components/Questions'
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Search />
        <Questions />
      </main>
    </div>
  );
}

export default App;
