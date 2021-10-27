import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/Developers.jsx";

function App() {
  const user = { Dev: "Nicholas", Idade: 23, Pais: "Brasil" };

  return (
    <div className="App">
      <header className="App-header">
        <PersonCard name={user.Dev} age={user.Idade} country={user.Pais} />
      </header>
    </div>
  );
}

export default App;
