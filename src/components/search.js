import { Form, Container, FormControl } from 'react-bootstrap';
import { useState, useContext, useEffect } from "react";
import arrayContext from '../context/arrayContext';

function SearchData() {
  const {data, setData,  tempArray, setTempArray } = useContext(arrayContext);
  const [name, setName] = useState("");

  useEffect(() => {
    search();
  }, [name]);

  const search = function () {
    if (name === "") {
      setData(tempArray);
    } else {
      var result = tempArray.filter(element => element.medicineName.toLowerCase().includes(name.toLowerCase()))
      setData(result);
    }
  };
  return (
    <div class="search">
      <Container fluid>
        <Form className="d-flex"  >
          <FormControl value={name} onChange={(e) => { setName(e.target.value) }}
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
      </Container>
    </div>
  );

}
export default SearchData;