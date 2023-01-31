import Head from "next/head";
import PokemonDetails from "@/Components/PokemonDetails";
export default function pokemon() {
  return (
    <div >
      <Head>
        <title>Pokemon</title>
      </Head>
      <PokemonDetails />
    </div>
  );
}
