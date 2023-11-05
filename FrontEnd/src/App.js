import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import MainNav from "./components/navbar";
import Wallet from "./components/wallet";
import WelcomeHeader from "./components/welcome-header";
import About from "./pages/about";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Lobby from "./pages/lobby";
import Blog from "./pages/blog";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForumPage from "./pages/forum-page";
import Contest from "./pages/contest";
import FantasyDraft from "./pages/fantasydraft";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainNav />
      <WelcomeHeader />

      <div className="container-fluid">
        <div className="App">
          <Routes>
            <Route path="/pages/home" element={<Home />} />
            <Route path="/pages/about" element={<About />} />
            <Route path="/pages/profile" element={<Profile />} />
            {/* <Route path="/pages/services" element={<Services />} /> */}
            <Route path="/pages/wallet" element={<Wallet />} />
            <Route path="/pages/Blog" element={<Blog />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/pages/lobby" element={<Lobby />} />
            <Route exact path="/pages/contest" element={<Contest />} />
            <Route exact path="/pages/fantasydraft" element={<FantasyDraft />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
