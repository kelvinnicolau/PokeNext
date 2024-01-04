import styles from '../styles/Card.module.css';

import Image from "next/image";
import Link from "next/link";

export default function Card({ pokemon }) {
    // Adiciona dois zeros à frente do ID se o ID for menor que 100
    const paddedId = String(pokemon.id).padStart(3, '0');

    return (
        
        <Link href={`/pokemon/${pokemon.id}`} legacyBehavior>
        <div className={styles.card}>
            <Image 
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`}
                width='120'
                height='120'
                alt={pokemon.name}
                onError={(e) => console.error("Erro ao carregar imagem:", e)}
            />
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.title}>{pokemon.name}</h3>
            {/* <Link href={`/pokemon/${pokemon.id}`} legacyBehavior>
                <a className={styles.btn}>Detalhes</a>
            </Link> */}
        </div>
        </Link>
    )
}

