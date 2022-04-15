import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useState } from "react";
import { useContext } from 'react';
import   arrayContext   from '../context/arrayContext';


function Popup() {
  //const [data, setData] = useContext(arrayContext);
  const data= useContext(arrayContext);
  const [name, setName] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(data)
  const submit = function(){
    let tempObject = { medicineName: name, stock: stock, price: price};
    var lastIndex = Object.keys(data)[Object.keys(data).length-1];
    data[parseInt(lastIndex) +1] = { medicineName: name, stock: stock, price: price}; 
    //setData(data)
    console.log(data)
    setShow(false)
  };
  return (
    <div>
      <>
        <Button variant="dark" onClick={handleShow}>
          Add Medicine
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Drug information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name Of The Medicine:</Form.Label>
                <Form.Control value={name} onChange={(e) => setName(e.target.value)}
                  placeholder=""
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Stock In Pharmacy:</Form.Label>
                <Form.Control value={stock} onChange={(e) => setStock(e.target.value)} type="number"
                  placeholder=""
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Price:</Form.Label>
                <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} type="number"
                  placeholder=""
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={submit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}
export default Popup;