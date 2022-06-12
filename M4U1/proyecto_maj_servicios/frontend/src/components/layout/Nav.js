import { Link } from "react-router-dom";


const Nav = (props) => {

    return (
        <nav>
            <ul>
                <li><Link to="/HomePage">Inicio</Link></li>
                <li><Link to="/Servicios">Servicio</Link></li>
                <li><Link to="/TrabajosRealizados">Trabajos Realizados</Link></li>
                <li><Link to="/Contacto">Contactos</Link></li>
            </ul>
        </nav>
    );
}
export default Nav;  