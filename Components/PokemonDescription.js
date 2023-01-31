import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useEffect } from "react";
const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    status
    message
    results {
      url
      name
      image
      abilities
    }
  }
}`;
const gqlVariables = {
  limit: 10,
  offset: 1,
};
const PokemonDescription = () => {
  // useEffect(() => {
  //   fetch("https://graphql-pokeapi.graphcdn.app/", {
  //     credentials: "omit",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       query: gqlQuery,
  //       variables: gqlVariables,
  //     }),
  //     method: "POST",
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log("Response from server", res));
  // }, []);
  return (
    <div className={`bg-white p-0 m-0  ${styles.pokemonDescription}`}>
      <div className=" max-w-7xl mx-auto py-12 bg-white">
        <div className={` text-[#257BC4]`}>
          <h3
            className={`text-center text-3xl my-8 font-semibold ${styles.pokemonTitle}`}
          >
            Ash & Pikachu Arrive in <br /> Pokémon Universe
          </h3>
        </div>
        <div
          className={`p-2 text-gray-500 grid  gap-4 grid-cols-1 lg:grid-cols-2 text-sm `}
        >
          {/* first div   */}
          <div className="first flex-col  flex  ">
            <div className="flex">
              <div className="w-[70%] m-2">
                <p className="text-justify ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="flex my-2">
                  <p className="w-[70%] text-justify mr-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                  </p>
                  <Image
                    className="mb-2"
                    src={"/Media Asset/Image04.png"}
                    height={200}
                    width={200}
                    alt="pokemon-logo"
                  />
                </div>
                <p className="text-justify ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="w-[30%] mb-2">
                <Image
                  className="mb-2"
                  src={"/Media Asset/Image04.png"}
                  height={200}
                  width={200}
                  alt="pokemon-logo"
                />
                <Image
                  src={"/Media Asset/Image04.png"}
                  height={200}
                  width={200}
                  alt="pokemon-logo"
                />
              </div>
            </div>
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          {/* second div  */}
          <div className="second">
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="flex">
              <div className="w-[30%] mr-2 mb-2">
                <Image
                  src={"/Media Asset/Image05.png"}
                  height={200}
                  width={200}
                  alt="pokemon-logo"
                />
              </div>
              <div className="w-[70%] mb-2">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-[30%] mr-2 mb-2">
                <Image
                  src={"/Media Asset/Image01.png"}
                  height={200}
                  width={200}
                  alt="pokemon-logo"
                />
              </div>
              <div className="w-[70%]">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PokemonDescription;
