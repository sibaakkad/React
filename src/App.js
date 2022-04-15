import './App.css';
import MedicineList from './components/medicineList'
import { ArrayProvider } from './context/arrayContext';

function App() {
  return (
    <ArrayProvider>
      <MedicineList />
    </ArrayProvider>
  );
}
export default App;
