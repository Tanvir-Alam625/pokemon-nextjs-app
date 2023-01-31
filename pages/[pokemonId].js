import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import PokemonDetails from "@/Components/PokemonDetails";
export default function pokemon() {
  return (
    <div className="">
      <Head>
        <title>Pokemon</title>
      </Head>
      <PokemonDetails />
    </div>
  );
}
