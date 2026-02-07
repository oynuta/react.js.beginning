import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Payments from './pages/Payments'
import Contacts from './pages/Contacts'

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">MyStore</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/payments">Payments</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
      </nav>

      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </>
  )
}

export default App
