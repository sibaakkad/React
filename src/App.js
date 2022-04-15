import './App.css';
import MedicineList from './components/MedicineList'
import arrayContext from './context/arrayContext';
import { useState } from "react";
const arrayOfObjects = [
  { medicineName: "Panadol", stock: 10 , price: 20},
  { medicineName: "Brufen ", stock: 10 , price: 20},
  { medicineName: "Parol", stock: 10 , price: 20},
  { medicineName: "Americano", stock: 10 , price: 20},
  { medicineName: "Americano", stock: 10 , price: 20},
];


function App() {
 // const [Data, setData] = useState(arrayOfObjects);
  return ( 
    <arrayContext.Provider value={arrayOfObjects}>
      <MedicineList/>
    </arrayContext.Provider>
    
  );
}
export default App;
arrayOfObjects.sort(function(a, b) {
  const nameA = a.medicineName.toUpperCase(); // ignore upper and lowercase
  const nameB = b.medicineName.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
});
