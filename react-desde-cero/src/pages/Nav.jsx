import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/about">Sobre Nosotros</Link>
            <Link to="/contact">Contacto</Link>
        </nav>
    )
}