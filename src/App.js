import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/Developers.jsx";

function App() {
  const user = [
    { Dev: "Nicholas", Idade: 23, Pais: "Brasil" },
    { Dev: "Paolo", Idade: 42, Pais: "Peru" },
    { Dev: "Amanda", Idade: 21, Pais: "Argentina" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <PersonCard
          name={user[0].Dev}
          age={user[0].Idade}
          country={user[0].Pais}
        />
        <PersonCard
          name={user[1].Dev}
          age={user[1].Idade}
          country={user[1].Pais}
        />
        <PersonCard
          name={user[2].Dev}
          age={user[2].Idade}
          country={user[2].Pais}
        />
      </header>
    </div>
  );
}

export default App;
