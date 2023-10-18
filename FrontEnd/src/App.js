import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './pages/about';
import Home from './pages/home';
import Profile from './pages/profile';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Nav/>

    <div className="container-fluid">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/profile" element={<Profile />} />
        </Routes>
        </div>
        
        <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
