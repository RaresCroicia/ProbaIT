import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/MyNavbar';
import {Row, Col, Button, Card, Form, Modal} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import ModalSmecher from './components/ModalLogin';
import salt_bae from './img/WHY_SO_SALTY.svg';
import {useState} from 'react'
import ModalPosted from './components/ModalPosted';
import ModalWrong from './components/ModalWrong';
import { useRef } from 'react';

import meme1 from './img/meme1.svg';
import meme2 from './img/meme2.svg';
import meme3 from './img/meme3.svg';
import Footer from './components/Footer';



function App() {

  const [showPostedModal, setShowPostedModal] = useState(false);
  const [showWrongModal, setShowWrongModal] = useState(false);

  const formMeme = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <>
      <MyNavbar/>
      <Container>
      <Row>
        <Col>
          <h1 className="h1-main">
            Partajarea de meme-uri nu a fost niciodată mai simplă! 
          </h1>
          <p className="p-main">
            Platforma ideală pentru studenții de la Politehnică, amuzați de câte materii o să pice semestrul asta.
          </p>
          <Button onClick={() => scrollToSection(formMeme)} variant="primary">
            Upload a MEME
          </Button>
        </Col>
        <Col>
          <img src={salt_bae}></img>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Card ref={formMeme}>
          <Card.Body>
            <Container>
              <Row>
                <Col>
                  <h1 className="h1-card">
                  Ai tupeu și crezi că ești amuzant?
                  </h1>
                  <p className="p-card">
                  Trimite-ne un mail și poate ai noroc să ne apuce râsul când îți vedem meme-ul.
                  </p>
                </Col>
                <Col>
                <Form  onSubmit={(e) => {
                  e.preventDefault();
                  const path=e.target[1].value;
                  if(path.includes(".png") || path.includes(".jpg") || path.includes(".jpeg") || path.includes(".gif")){
                    setShowPostedModal(true);
                  }
                  else{
                    setShowWrongModal(true);
                  }
                }
                }>
                  <Form.Group className="mb-3" controlId="formMemeDescription">
                    <Form.Label>Descriere</Form.Label>
                    <Form.Control type="text" placeholder="descriere" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMemeUpload">
                    <Form.Label>Meme(jpg, jpeg, png, gif)</Form.Label>
                    <Form.Control type="file" accept=".jpg,.jpeg,.gif,.png" placeholder="drag & drop image of click to upload" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Trimite
                  </Button>
                  <ModalPosted show={showPostedModal} onHide={() => setShowPostedModal(false)} buttonFunction={() => setShowPostedModal(false)}/>
                  <ModalWrong show={showWrongModal} onHide={() => setShowWrongModal(false)} buttonFunction={() => setShowWrongModal(false)}/>
                </Form>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Row>

      <Row>
        <h1 className="h1-card">
          Most viewed
        </h1>
      </Row>

      <Row>
        <Col>
          <img src={meme2}/>
        </Col>
        <Col>
          <img src={meme1}/>
        </Col>
        <Col>
          <img src={meme3}/>
        </Col>
      </Row>

      </Container>
      <Footer/>
    </>
  );
}

export default App;
