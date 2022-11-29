import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Container from 'react-bootstrap/Container'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import MEMEIT from '../img/LOGO_MEME_IT.svg'

const fun = () => {
    console.log("Apasam butoane");
}

export default function MyNavbar() {
    return (
        <Navbar expand="lg" fixed="top" sticky="top"  variant="light" bg="light">
            <Container>
                <Navbar.Brand> <img src={MEMEIT}/> </Navbar.Brand>
                <Nav.Link position="right" onClick={fun}> Login </Nav.Link>
            </Container>
        </Navbar>
    )
}

// Some good shit documentation https://www.javatpoint.com/react-bootstrap-navbars