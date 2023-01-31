import styles from '@/styles/Home.module.css'
import Image from 'next/image';
const Pokemon = () => {
    return(
        <div className={`p-4 bg-[#fff] mx-4 lg:mx-0 min-w-[200px]  rounded-md shadow-xl ${styles.pokemon}`}>
            
            <div className={`bg-[#F2F2F2]  pb-6   shadow rounded-md mb-4 `}>
                <p className="text-gray-600 p-2  font-semiblod">#89</p>
                <div className=" px-4">
                    <Image className={`${styles.logo}`} src={'/Media\ Asset/Logo.png'} width={150} height={100}  alt="pokemon-logo"/>
                </div>
            </div>
            <h3 className={`text-xl text-gray-600 my-2 ${styles.title}`}>Blubasar</h3>
            <button className="bg-[#B97FC9] px-2 py-1 text-sm rounded-md mr-4">Grass</button>
            <button className="bg-[#9BCC50] px-2 py-1 text-sm rounded-md mr-4">Poison</button>
        </div>
    )
}
export default Pokemon;