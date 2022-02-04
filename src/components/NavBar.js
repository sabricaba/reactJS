import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../images/logo/1.png';

const NavBar= () => {
    return (
        <div className="navUno">
            <a href="#"><img className="logoPrincipal" src={image} alt="" /></a>
            <nav className="navTemporal">
                    <ul>
                        <li className="nav-item active">
                        <a className="nav-link" aria-current="page" href="#">Adopta</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Publica</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Dona</a>
                        </li>
                    </ul>
            </nav>
        </div>
    );
};

export default NavBar;
