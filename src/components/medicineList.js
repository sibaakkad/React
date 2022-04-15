import { Table } from 'react-bootstrap';
import arrayContext from '../context/arrayContext';
import { useContext } from 'react'
import EditData from './editData';
import DeleteData from './deleteData';
import sortFunction from '../context/sort';
import AddData from './addData';
import '../css/style.css';

function MedicineList() {
  const { data, setData } = useContext(arrayContext);
  sortFunction(data)
  return (
    <div class="list-continer">
      <h1>Stock System</h1>
      <Table striped bordered hover >
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
              <td>{index + 1}</td>
              <td>{element.medicineName}</td>
              <td>{element.stock}</td>
              <td>{element.price}
                <span> &#8378;</span> </td>
              <td ><EditData dataParentToChild={index} /></td>
              <td><DeleteData dataParentToChild={index} /></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <AddData />
    </div>
  );
}
export default MedicineList;