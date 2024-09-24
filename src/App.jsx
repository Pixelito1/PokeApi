import PokemonList from "./components/PokemonList";
import PokeContext from "./context/PokeContext";
import "./index.css";

function App() {
  return (
    <div className="App">
      <PokeContext>
        <PokemonList />
      </PokeContext>
    </div>
  );
}

export default App;
