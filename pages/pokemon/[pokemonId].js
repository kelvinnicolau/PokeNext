import Image from "next/image";
import styles from '../../styles/Pokemon.module.css';

export const getStaticPaths = async () => {

    const maxPokemons = 251
    const api = 'https://pokeapi.co/api/v2/pokemon/';

    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json()

    //params
    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonId: (index + 1).toString() },
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async(context) => {

    const id = context.params.pokemonId
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()

    return {
        props: { pokemon: data },
    }
}

export default function Pokemon({ pokemon }) {

    const paddedId = String(pokemon.id).padStart(3, '0');

    return (
        <div className={styles.pokemon_container}>
            <h1 className={styles.title}>
                {pokemon.name}
            </h1>
            <Image 
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`}
                width='200'
                height='200'
                alt={pokemon.name}
                onError={(e) => console.error("Erro ao carregar imagem:", e)}
            />
            <div>
                <h3>Número:</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo:</h3>
                <div className={styles.types_container}>
                    {pokemon.types.map((item,index) => (
                        <span key={index}
                        className={`${styles.type} ${styles['type_' + item.type.name]}`}
                        >{item.type.name}</span>
                    ))}
                </div>
            </div>
            <div className={styles.data_container}>
                <div className={styles.data_height}>
                    <h3>Altura:</h3>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={styles.data_weight}>
                    <h3>Peso:</h3>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
    )
    
}