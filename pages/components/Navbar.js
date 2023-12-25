import Image from "next/image";
import Link from "next/link";

export default function Navbar (){
    return (
        <navbar>
            <div>
                <Image src='/images/pokeball.png' width={30} height={30} alt="PokeNext"/>
                <h1>PokeNext</h1>
            </div>
            <ul>
                <li>
                    <Link href='/' legacyBehavior><a>Home</a></Link>
                </li>
                <li>
                    <Link href='/about' legacyBehavior><a>Sobre</a></Link>
                </li>
            </ul>
        </navbar>
    )
}