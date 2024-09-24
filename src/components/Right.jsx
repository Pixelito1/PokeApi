import { useContext } from "react";
import Trimming from "./Trimming";
import { UserContext } from "../context/PokeContext";

function Right() {
  const { pokemonData, pokemonLore } = useContext(UserContext);
  return (
    <div className="flex flex-col items-center shadow-lg rounded-r-3xl p-6 mt-12 bg-red-pokemon text-white h-[550px] font-pixels">
      <p className="text-3xl pb-4">{pokemonData?.name}</p>
      <div className="flex items-center justify-center bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-3 w-[350px] h-[100px] overflow-hidden">
        <p className="text-white text-sm text-center">
          {pokemonLore && pokemonLore.flavor_text_entries.length > 0
            ? pokemonLore.flavor_text_entries[0].flavor_text
            : "No hay información de lore disponible."}
        </p>
      </div>
      <Trimming />
      <div className="flex justify-between w-[350px]">
        <div className="flex flex-col gap-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg px-3 pt-2 w-[160px] h-[115px] overflow-hidden">
          <p className="text-white text-lg font-bold text-center">HABILITIES</p>
          <div className="flex flex-col items-start justify-start overflow-y-auto max-h-[90px]">
            {pokemonData?.abilities.map((infoAbility, index) => (
              <p key={index} className=" text-gray-200 text-sm">
                {infoAbility.ability.name}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg px-3 pt-2 w-[160px] h-[115px] overflow-hidden">
          <p className="text-white text-lg font-bold text-center">BASE STATS</p>
          <div className="flex flex-col items-start justify-start overflow-y-auto max-h-[90px]">
            <p className="text-gray-200 text-sm">
              HP:{" "}
              {
                pokemonData?.stats.find((stat) => stat.stat.name === "hp")
                  ?.base_stat
              }
            </p>
            <p className="text-gray-200 text-sm">
              Attack:{" "}
              {
                pokemonData?.stats.find((stat) => stat.stat.name === "attack")
                  ?.base_stat
              }
            </p>
            <p className="text-gray-200 text-sm">
              Defense:{" "}
              {
                pokemonData?.stats.find((stat) => stat.stat.name === "defense")
                  ?.base_stat
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
