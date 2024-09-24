import Left from "./Left";
import Right from "./Right";

function PokemonList() {
  return (
    <div
      className="flex justify-center items-center bg-cover bg-center min-h-screen font-gato"
      style={{
        backgroundImage: `url('https://i.pinimg.com/originals/34/81/af/3481af3e44269a6c702729c5e54f5bab.jpg')`,
      }}
    >
      <div>
        <div className="bg-red-pokemon h-12 rounded-tl-3xl" />
        <div className="bg-zinc-700 h-1" />
        <Left />
      </div>
      <div className="flex flex-col pt-14">
        <div className="bg-red-mid w-5 h-[50px] " />
        <div className="bg-black w-5 h-[10px] " />
        <div className="bg-red-mid w-5 h-[350px] " />
        <div className="bg-black w-5 h-[10px] " />
        <div className="bg-red-mid w-5 h-[50px] " />
      </div>
      <Right className="font-['Edu_NSW_ACT_Foundation']" />
    </div>
  );
}

export default PokemonList;
