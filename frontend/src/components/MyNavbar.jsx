import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Container from 'react-bootstrap/Container'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import MEMEIT from '../img/LOGO_MEME_IT.svg'

export default function MyNavbar() {
    return (
        <Navbar className="position-sticky ps-0" expand="lg" variant="dark" fixed="top">
            <Container>
                <img src={MEMEIT} alt="da" as={Link} to={"/"}/>
                
            </Container>
        </Navbar>
    )
}

// Some good shit documentation https://www.javatpoint.com/react-bootstrap-navbars