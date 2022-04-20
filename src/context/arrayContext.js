import { createContext, useState } from 'react';
const arrayContext = createContext();
const arrayOfObjects = [
  { medicineName: "Panadol", stock: 100, price: 10 },
  { medicineName: "Brufen ", stock: 200, price: 24 },
  { medicineName: "Parol", stock: 500, price: 12 },
  { medicineName: "Dolorex", stock: 100, price: 19 },
  { medicineName: "Aferin", stock: 200, price: 13 },
];
export const ArrayProvider = ({ children }) => {
  const [data, setData] = useState(arrayOfObjects);
  const [tempArray, setTempArray] = useState(arrayOfObjects);
  const values = {
    data,
    setData,
    tempArray,
    setTempArray,
  };
  return (<div>
          <arrayContext.Provider value={values}>{children} </arrayContext.Provider>         
          </div>
  )
};
export default arrayContext;