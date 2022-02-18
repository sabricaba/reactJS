import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../images/logo/1.png';
import CarWidget from './CarWidget';
import { Link } from 'react-router-dom';


const NavBar= () => {
    return (
        <header>
            <div className="navUno">
               <Link to="/"><img className="logoPrincipal" src={image} alt="" /></Link>
                <nav className="navTemporal">
                        <ul>
                            <Link style={{textDecoration: "none", color: "#03898e" }} to="/category/Perros"><li> Perros </li></Link>
                            <Link style={{textDecoration: "none", color: "#03898e" }} to="/category/Gatos"><li> Gatos </li></Link>
                            <Link style={{textDecoration: "none", color: "#03898e" }} to="/category/Otros"><li> Otras mascotas </li></Link>
                        </ul>
                </nav>
                <CarWidget />
            </div>

        </header>
    );
};

export default NavBar;
