import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import Pokemon from "./Pokemon";
import PokemonDescription from './PokemonDescription';
const Pokemons = () => {

    return(
        <div className={`w-full py-6 min-h-screen ${styles.pokemonContainer}` }>
            <div className='logo flex justify-center  py-10'>
                <Image src={'/Media\ Asset/Logo.png'} width={200} height={100}  alt="pokemon-logo"/>
            </div>
            <div className='grid grid-cols-5 gap-10  max-w-7xl my-0 mx-auto'>
                <Pokemon />
                <Pokemon />
                <Pokemon />
                <Pokemon />
                <Pokemon />
                <Pokemon />
                <Pokemon />
            </div>
        </div>
    )
}
export default Pokemons;