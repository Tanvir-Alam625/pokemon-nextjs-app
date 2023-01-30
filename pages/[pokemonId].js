import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
export default function pokemon() {
  return (
    <div className="">
      <Head>
        <title>Pokemon</title>
      </Head>
      <div
        className={`min-h-screen w-full bg-white text-gray-800 flex flex-col items-center ${styles.pokemonDescription}`}
      >
        <div className="max-w-7xl mx-auto min-h-full  flex flex-col items-center  bg-white ">
          <div className="flex justify-center py-20">
            <Image
              src={"/Media Asset/Logo.png"}
              width={200}
              height={100}
              alt="pokemon-logo"
            />
          </div>
          <div className="flex  flex-col lg:flex-row p-2 text-gray-600 ">
            {/* left div  */}
            <div className="w-full lg:w-[33%] lg:order-1 order-2 p-2">
              <h2 className="text-2xl">BluBasaur #001</h2>
              <p className="text-xs  font-semibold">
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
              <div
                className={`relative rounded-md  mt-6 h-[200px] w-[300px] ${styles.pokemonDetails}`}
              >
                <div
                  className={`absolute top-1 right-1 bottom-1 left-1 rounded-md bg-white grid grid-cols-2 gap-4 p-4 ${styles.pokemonDetails1}`}
                >
                  <div>
                    <h3 className="text-xl font-semibold my-2">Height</h3>
                    <p className="my-2">343</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold my-2">Category</h3>
                    <p className="my-2">343</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold my-2">Weight</h3>
                    <p className="my-2">343</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold my-2">Abilities</h3>
                    <p className="my-2">343</p>
                  </div>
                </div>
              </div>
            </div>
            {/* middel div  */}
            <div className=" w-full lg:w-[33%] flex justify-center items-center lg:order-2 order-1">
              <Image
                className=" scale-[0.9] duration-700 ease-in-out hover:scale-[1] shadow-2xl"
                src={"/Media Asset/Image04.png"}
                width={200}
                height={100}
                alt="pokemon-logo"
              />
            </div>
            {/* right div  */}
            <div className="w-full lg:w-[33%]  order-3">
              <h2 className="text-2xl  my-2">Type</h2>
              <span className="py-2 px-4 rounded text-sm text-slate-50 bg-yellow-400 mr-2 ">
                Grass
              </span>
              <span className="py-2 px-4 rounded text-sm text-slate-50  bg-yellow-400 mr-2">
                Poisson
              </span>
              <br />
              <br />
              <h2 className="text-2xl  my-2">Weakness</h2>
              <span className="py-2 px-4 rounded text-sm text-slate-50  bg-yellow-400 mr-2">
                Grass
              </span>
              <span className="py-2 px-4 rounded text-sm  text-slate-50 bg-yellow-400 mr-2">
                Poisson
              </span>
              <br /> <br />
              <h2 className="text-2xl  my-2">Stats</h2>
              <div className="">
                <div className="my-2">
                  <p>HP</p>
                  <div className="progress relative bg-slate-400 w-full py-1 rounded">
                    <div className=" absolute top-0 right-[20%] left-0 bottom-0 bg-blue-600 rounded-l"></div>
                  </div>
                </div>
                <div className="my-2">
                  <p>Attack</p>
                  <div className="progress relative bg-slate-400 w-full py-1 rounded">
                    <div className=" absolute top-0 right-[20%] left-0 bottom-0 bg-blue-600 rounded-l"></div>
                  </div>
                </div>
                <div className="my-2">
                  <p>Defense</p>
                  <div className="progress relative bg-slate-400 w-full py-1 rounded">
                    <div className=" absolute top-0 right-[20%] left-0 bottom-0 bg-blue-600 rounded-l"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="text-center flex bg-yellow-500  border-2 border-blue-600 text-slate-50 px-4 py-2 rounded text-xl duration-300 ease-in hover:bg-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
