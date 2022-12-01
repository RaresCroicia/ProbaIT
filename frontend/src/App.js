import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/MyNavbar';
import {Row, Col, Button} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import ModalSmecher from './components/ModalLogin';
import salt_bae from './img/WHY_SO_SALTY.svg';

function App() {
  return (
    <>
      <MyNavbar/>
      <Container>
      <Row className="align-items-center">
        <Col>
          <h1 className="h1-main">
            Partajarea de meme-uri nu a fost niciodată mai simplă! 
          </h1>
          <p className="p-main">
            Platforma ideală pentru studenții de la Politehnică, amuzați de câte materii o să pice semestrul asta.
          </p>
          <Button variant="primary" background-color="purple">
            Upload a MEME
          </Button>
        </Col>
        <Col>
          <img src={salt_bae}></img>
        </Col>
      </Row>
      </Container>

    </>
  );
}

export default App;
