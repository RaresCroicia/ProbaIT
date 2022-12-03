import {Form, Button, Modal} from 'react-bootstrap'
import './Modal.css'

function ModalLogin(props) {
  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            <>
                <h1 className="text-center">
                    Welcome back
                </h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Parola</Form.Label>
                        <Form.Control type="password" placeholder="parola" />
                    </Form.Group>
                </Form>
                
               <Button onClick={props.buttonFunction} bg-color="green">
                    Login
               </Button>

            </>
        </Modal.Body>
    </Modal>
  );
}

export default ModalLogin;