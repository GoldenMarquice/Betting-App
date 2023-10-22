import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/about";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Lobby from "./pages/lobby";
import MainNav from "./components/navbar";
import Header from "./components/header";
import WelcomeHeader from "./components/welcome-header";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forum from "./pages/forum";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainNav />
      <WelcomeHeader />

      <div className="container-fluid">
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/about" element={<About />} />
            <Route path="/pages/profile" element={<Profile />} />
            <Route path="/forum" element={<Forum />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
