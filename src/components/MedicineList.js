import { Table } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import arrayContext from '../context/arrayContext';
import {useContext} from 'react'
import Popup from './Popup';

function MedicineList() {
  const data = useContext(arrayContext);
  return (   
    <div>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Medicine Name</th>
        <th>Stock</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {data.map((element, index) => (  
              <tr data-index={index}> 
               <td>{index+1}</td> 
                <td>{element.medicineName }</td>  
                <td>{element.stock}</td>  
                <td>{element.price }
                <Badge pill bg="light" text="dark">tl</Badge> </td>  
              </tr>  
            ))} 
     {/* { data.forEach(element => {
        <tr>
          <td>{counter+1}</td>
          <td>{element.medicineName}</td>
          <td>{element.stock}</td>
          <td>{element.price}</td>
        </tr>
         })} */}
    </tbody>
  </Table>
  <Popup/>
  </div>
  );
}
export default MedicineList;