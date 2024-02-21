import Link from "next/Link";

export default function Menu(){
    return(
        <header>
            <h1>Home</h1>
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