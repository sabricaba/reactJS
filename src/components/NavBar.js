import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../images/logo/1.png';
import CarWidget from './CarWidget';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';


const NavBar= () => {
    return (
        <header>
            <Navbar>
            <Container>
                <Navbar.Brand><Link to="/"><img className="logoPrincipal" src={image} alt="" /></Link></Navbar.Brand>
                <Navbar.Toggle />
                <Nav className="text-center mt-4 mb-4">
                    <Nav.Link><Link style={{textDecoration: "none", color: "#03898e" }} to="/category/Perros"><li> Perros </li></Link></Nav.Link>
                    <Nav.Link><Link style={{textDecoration: "none", color: "#03898e" }} to="/category/Gatos"><li> Gatos </li></Link></Nav.Link>
                    <Nav.Link><Link style={{textDecoration: "none", color: "#03898e" }} to="/category/Otros"><li> Otras mascotas </li></Link></Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                <Link style={{textDecoration: "none", color: "#03898e" }} to="./cart"> <CarWidget /> </Link>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    );
};

export default NavBar;
