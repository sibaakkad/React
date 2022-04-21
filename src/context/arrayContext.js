import { createContext, useState } from 'react';
const arrayContext = createContext();
const arrayOfObjects = [
  { id: 1, medicineName: "Panadol", stock: 100, price: 10 },
  { id: 2, medicineName: "Brufen ", stock: 200, price: 24 },
  { id: 3, medicineName: "Parol", stock: 500, price: 12 },
  { id: 4, medicineName: "Dolorex", stock: 100, price: 19 },
  { id: 5, medicineName: "Aferin", stock: 200, price: 13 },
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