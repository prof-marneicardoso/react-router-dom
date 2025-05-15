import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Produtos</Link></li>
                <li><Link to="/about">Sobre</Link></li>
            </ul>
        </nav>
        </>
    );
}
