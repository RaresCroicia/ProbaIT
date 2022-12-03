import {Button, Modal} from 'react-bootstrap';
import './Modal.css'

function ModalWrong(props) {
  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            <>
                <h1 className="text-center">
                    File not supported! We accept only 
                </h1>

                <h1 className="text-center">
                    .png  .jpg  .jpeg  .gif
                </h1>
                
               <Button onClick={props.buttonFunction}>
                    Close
               </Button>
            </>
        </Modal.Body>
    </Modal>
  );
}

export default ModalWrong;