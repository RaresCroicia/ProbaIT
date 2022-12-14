import './App.css';

import 'typeface-merriweather';

import MyNavbar from './components/MyNavbar';
import ModalPosted from './components/ModalPosted';
import ModalWrong from './components/ModalWrong';
import Footer from './components/Footer';

import {Row, Col, Button, Card, Form, Modal, Container, Image} from 'react-bootstrap';
import {useState, useRef} from 'react'

import meme1 from './img/meme1.svg';
import meme2 from './img/meme2.svg';
import meme3 from './img/meme3.svg';
import salt_bae from './img/WHY_SO_SALTY.svg';

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

      <Container className="d-flex justify-content-center" style={{height: "90vh", width: "100vw", padding: "5%"}}>
      <Row md={2} xs={1} className="align-items-center">
        <Col className="mb-5" md={6}>
          <h1 className="h1-main mb-3">
            Partajarea de meme-uri nu a fost niciodată mai simplă! 
          </h1>
          <p className="p-main mb-5">
            Platforma ideală pentru studenții de la Politehnică, amuzați de câte materii o să pice semestrul asta.
          </p>
          <Button className="position-relative start-50 translate-middle" onClick={() => scrollToSection(formMeme)} variant="primary">
            Upload a MEME
          </Button>
        </Col>
        <Col className="mb-5" md={6}>
          <img className="img-fluid" src={salt_bae}></img>
        </Col>
      </Row>
      </Container>

      <Container ref={formMeme} className="d-flex justify-content-center mb-5" style={{background: "#6F3096", height: "100vh", width: "100vw", padding: "5%"}} >
      <Row className="align-items-center justify-content-center">
        <Card style={{height: "60%", width: "100%"}}>
          <Card.Body>
            <Container className="d-flex justify-content-center mb-5">
              <Row md={2} xs={1} className="align-items-center">
                <Col className="text-center">
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
      </Container>
      <Container>
      <Row>
        <h1 className="h1-card mb-5">
          Most viewed
        </h1>
      </Row>

      <Row xs={1} md={3}>
        <Col className="mb-5">
          <img className="img-fluid" src={meme2}/>
        </Col>
        <Col className="mb-5">
          <img className="img-fluid" src={meme1}/>
        </Col>
        <Col className="mb-5">
          <img className="img-fluid" src={meme3}/>
        </Col>
      </Row>

      </Container>
      <Footer/>
    </>
  );
}

export default App;
