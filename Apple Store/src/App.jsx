import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Macbook from './Components/Macbook';
import Watch from './Components/Watch';
import Ipad from './Components/Ipad';
import Iphone from './Components/Iphone';
import Accessories from './Components/Accessories';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
     <main>
     <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/macbook" element={<Macbook />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/iphone" element={<Iphone />} />
            <Route path="/ipad" element={<Ipad />} />
            <Route path="/accessories" element={<Accessories />} />
          </Routes>
        </BrowserRouter>
    </main>
    </>
  )
}

export default App
