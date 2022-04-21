import { Modal, Button } from 'react-bootstrap';
import { useState, useContext } from "react";
import arrayContext from '../context/arrayContext';

function DeleteData({ dataParentToChild }) {
  const { data, setData, tempArray, setTempArray } = useContext(arrayContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const submit = function () {
    const newList = tempArray.filter((item) => item.id !== dataParentToChild);
    setData(newList);
    setTempArray(newList);
    setShow(false);
  };
  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Warning!!!!!!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this data?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={submit}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default DeleteData;