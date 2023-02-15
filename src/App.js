import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom'
import Inventory from './components/inventory'
import Cart from './components/cart'

function App() {
  return (
    <div>
      <header>
        <h2>This is my header</h2>
        <NavLink to='/cart'>CART</NavLink>
      </header>
    <Routes>
      <Route index element={<Inventory/>}/>
      <Route path='/cart' element={<Cart/>}/>

    </Routes>
    </div>
  );
}

export default App;
