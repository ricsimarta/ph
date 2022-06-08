import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Business from './components/Business';
import Home from './components/Home';
import Products from './components/Products';
import Resources from './components/Resources';
import Services from './components/Services';
import Grants from './components/Grants';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/business' element={<Business />} />
        <Route path='/products' element={<Products />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/tender' element={<Grants />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
