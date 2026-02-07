
import './App.css'
import Welcome from './components/Welcome'
import Car from './components/Car'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* products */}
        {/* shop */}
        {/* cart */}
        {/* payment */}
        {/* contacts */}
      </Routes>
    </>
  );
}

export default App;