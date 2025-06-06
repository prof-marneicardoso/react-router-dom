import { Link } from "react-router-dom";
import './nav.css';

export function Nav({children, ...props}) {
    return (
        <nav className={props.className}>
            <div>Logo</div>

            <div>{children}</div>
            <div>{props.id}</div>
            
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Produtos</Link></li>
                <li><Link to="/about">Sobre</Link></li>
            </ul>
        </nav>
    );
}
