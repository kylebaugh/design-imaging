import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom'
import Inventory from './components/inventory'
import Cart from './components/cart'

function App() {
  return (
    <div id='main'>
      <header>
        <h2>Welcome!</h2>
        <section id='nav'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/cart'>Cart</NavLink>
        </section>
      </header>
    <Routes>
      <Route index element={<Inventory/>}/>
      <Route path='/cart' element={<Cart/>}/>

    </Routes>
    </div>
  );
}

export default App;
