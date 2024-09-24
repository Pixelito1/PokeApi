import { useContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { UserContext } from "../context/PokeContext";

function Left() {
  const [inputPokemon, setInputPokemon] = useState("");
  const { data, loading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1025"
  );
  const API_IMAGE_URL = (id) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const {
    id,

    handleSelectChange,

    setInput,
  } = useContext(UserContext);
  return (
    <div className="flex flex-col justify-center rounded-bl-3xl px-10 bg-red-pokemon h-[550px]">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center bg-gray-300 rounded-bl-3xl p-10">
          <img
            src={API_IMAGE_URL(id)}
            alt={`Pokémon ${id}`}
            className="w-60 h-60 mb-4 bg-white"
          />
        </div>
        <div className="flex flex-col gap-4 mb-4 pt-10">
          {loading ? (
            <p className="text-gray-600">Cargando...</p>
          ) : (
            <select
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={handleSelectChange}
              value={id}
            >
              <option value="" disabled>
                Select a Pokemon
              </option>
              {data?.map((pokemon, index) => (
                <option key={index + 1} value={index + 1}>
                  {pokemon.name}
                </option>
              ))}
            </select>
          )}
          <form
            className="flex"
            onSubmit={(e) => {
              e.preventDefault();
              setInput(inputPokemon);
            }}
          >
            <input
              className="border-2 border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              value={inputPokemon}
              onChange={(e) => setInputPokemon(e.target.value)}
              placeholder="Enter ID or name"
            />
            <button
              className="bg-green-pokemon rounded-r-md px-4 text-white hover:bg-dark-green transition duration-300"
              type="submit"
              disabled={!inputPokemon}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Left;
