import 'bootstrap/dist/css/bootstrap.css';

import {ButtonGroup, Button, Form, Navbar} from 'react-bootstrap';
import { useState } from 'react';

import ModalLogin from './ModalLogin';
import ModalRegister from './ModalRegister';

import MEMEIT from '../img/LOGO_MEME_IT.svg';

export default function MyNavbar() {
    
    const [logat, setLogat] = useState(false);
    const [modalLoginShow, setModalLoginShow] = useState(false);
    const [modalRegisterShow, setModalRegisterShow] = useState(false);


    const showButtons = () => {
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
                    <Button variant="third" onClick={() => {setLogat(false); localStorage.clear();}}> Delogare </Button>
                </ButtonGroup>
            )
        }
    }



    return (
        <>
            <Navbar collapseOnSelect expand="sm" sticky="top" variant="light" bg="light" className="mb-3">
                <Navbar.Brand><img src={MEMEIT}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                </Navbar.Collapse>
                <Navbar.Collapse id="responsive-navbar-nav"> 
                    <Form className="position-absolute top-5 end-0" >
                        {showButtons()}
                    </Form>
                </Navbar.Collapse>
            </Navbar>

            <ModalLogin show={modalLoginShow} onHide={() => setModalLoginShow(false)} 
                success={() => {
                    setLogat(true);
                    setModalLoginShow(false);
                }
            }/>
            <ModalRegister show={modalRegisterShow} onHide={() => setModalRegisterShow(false)} 
                success={() => {
                    setModalRegisterShow(false);
                }
            }/>
        </>
    )
}
