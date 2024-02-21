import Link from "next/Link";

export default function Futer(){
    return(
        <header>
            <h1>Futer</h1>
            <nav>
                <ul>
                    <Link href="/">
                    <li>Home</li>
                    </Link>
                    <Link href="/registro">
                    <li>Registro</li>
                    </Link>
                    
                </ul>
            </nav>
        </header>
    )
}