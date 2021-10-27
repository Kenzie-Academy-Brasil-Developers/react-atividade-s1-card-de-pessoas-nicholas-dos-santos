import "./style.css";

function PersonCard({ name, age, country }) {
  return (
    <div class="user-card">
      <span>
        <h2>Dev: {name}</h2>
        <h2>Idade: {age}</h2>
        <h2>Pais: {country}</h2>
      </span>
    </div>
  );
}

export default PersonCard;
