import { createContext } from "react";
import { useAbilities } from "../hooks/useFetch";

export const UserContext = createContext();

function PokeContext({ children }) {
  const { pokemonData, pokemonLore, id, setInput, handleSelectChange } =
    useAbilities();

  return (
    <UserContext.Provider
      value={{
        id,
        handleSelectChange,
        setInput,
        pokemonData,
        pokemonLore,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default PokeContext;
