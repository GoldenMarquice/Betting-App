import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import MainNav from "./components/navbar";
import Wallet from "./components/wallet";
import WelcomeHeader from "./components/welcome-header";
import About from "./pages/about";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Services from "./pages/walletservices";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainNav/>
      <WelcomeHeader />


      <div className="container-fluid">
        <div className="App">
          <Routes>
            <Route path="/pages/home" element={<Home />} />
            <Route path="/pages/about" element={<About />} />
            <Route path="/pages/profile" element={<Profile />} />
            <Route path="/pages/services" element={<Services />} />
            <Route path="/pages/wallet" element={<Wallet />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
