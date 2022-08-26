import { Link } from "react-router-dom";
import '../../styles/Nav.css';

const Nav = (props) => {

    return (
        
        <div className="menu_empresa">
        <nav>
            <ul>
                <li><Link to="/HomePage">Inicio</Link></li>
                <li><Link to="/Servicios">Servicio</Link></li>
                <li><Link to="/TrabajosRealizados">Trabajos Realizados</Link></li>
                <li><Link to="/Novedad">Misceláneos</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
            </ul>
        </nav>
        </div>
    );
}
export default Nav;  