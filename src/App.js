import './App.css';
import {Routes, Route} from 'react-router-dom'
import Inventory from './components/inventory'

function App() {
  return (
    <div>
      <header>
        <h2>This is my header</h2>
      </header>
    <Routes>
      <Route index element={<Inventory/>}/>

    </Routes>
    </div>
  );
}

export default App;
