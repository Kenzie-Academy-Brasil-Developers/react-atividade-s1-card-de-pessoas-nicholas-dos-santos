import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/Developers.jsx";

function App() {
  const user1 = { Dev: "Nicholas", Idade: 23, Pais: "Brasil" };
  const user2 = { Dev: "Paolo", Idade: 42, Pais: "Peru" };
  const user3 = { Dev: "Amanda", Idade: 21, Pais: "Argentina" };

  return (
    <div className="App">
      <header className="App-header">
        <PersonCard name={user1.Dev} age={user1.Idade} country={user1.Pais} />
        <PersonCard name={user2.Dev} age={user2.Idade} country={user2.Pais} />
        <PersonCard name={user3.Dev} age={user3.Idade} country={user3.Pais} />
      </header>
    </div>
  );
}

export default App;
