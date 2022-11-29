import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Container from 'react-bootstrap/Container'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import MEMEIT from '../img/LOGO_MEME_IT.svg';
import {ButtonGroup, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import ModalLogin from './ModalLogin';
import ModalRegister from './ModalRegister';

export default function MyNavbar() {
    
    const [logat, setLogat] = useState(false);
    const [modalLoginShow, setModalLoginShow] = useState(false);
    const [modalRegisterShow, setModalRegisterShow] = useState(false);


    const butoane = () => {
        if(logat === false){
            return(
                <ButtonGroup>
                    <Button variant="third" onClick={() => setModalLoginShow(true)}>Logare</Button>
                    <Button variant="third" onClick={() => setModalRegisterShow(true)}> Creare Cont</Button>
                </ButtonGroup>
            )
        }
        else{
            return(
                <ButtonGroup>
                    <Button variant="third" onClick={() => setLogat(false)}> Delogare </Button>
                </ButtonGroup>
            )
        }
    }



    return (
        <>
            <Navbar collapseOnSelect expand="sm" fixed="top" variant="light" bg="light" className="mb-3">
                <Navbar.Brand><img src={MEMEIT}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                </Navbar.Collapse>
                <Navbar.Collapse id="responsive-navbar-nav"> 
                    <Form className="position-absolute top-5 end-0" >
                        {butoane()}
                    </Form>
                </Navbar.Collapse>
            </Navbar>

            <ModalLogin show={modalLoginShow} onHide={() => setModalLoginShow(false)} 
                buttonFunction={() => {
                    setLogat(true);
                    setModalLoginShow(false);
                }
            }/>
            <ModalRegister show={modalRegisterShow} onHide={() => setModalRegisterShow(false)} 
                buttonFunction={() => {
                    setLogat(true);
                    setModalRegisterShow(false);
                }
            }/>
        </>
    )
}
