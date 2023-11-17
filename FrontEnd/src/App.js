import "./App.css";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Header from "./components/header";
import MainNav from "./components/navbar";
import Wallet from "./components/wallet";
import WelcomeHeader from "./components/welcome-header";
import Deposit from "./pages/Deposit";
import Promotions from "./pages/Promotions";
import Signup from "./pages/Signup";
import Withdraw from "./pages/Withdraw";
import About from "./pages/about";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Lobby from "./pages/lobby";
import Contest from "./pages/contest";
import FantasyDraft from "./pages/fantasydraft";
import ThankYou from "./pages/thankyouSign";
import Blog from "./pages/blog";
import ForumPage from "./pages/forum-page";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Forum from "./pages/forum";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainNav />
      
      
      <div className="container-fluid">
        <div className="App">
          <Routes>
            <Route path="/pages/home" element={<Home />} />
            <Route path="/pages/about" element={<About />} />
            <Route path="/pages/profile" element={<Profile />} />
            {/* <Route path="/pages/services" element={<Services />} /> */}
            <Route path="/pages/wallet" element={<Wallet />} />
            <Route path="/pages/login" element={<Login />} />
            <Route path="/pages/forum" element={<Forum />} />
            <Route path="/pages/lobby" element={<Lobby />} />
            {/* <Route path="/pages/ContestServices" element={<ContestServices />} /> */}
            <Route path="/pages/signup" element={<Signup />} />
            <Route path="/pages/thankyouSign" element={<ThankYou />} />
            <Route path="/pages/Deposit" element={<Deposit />} />
            <Route path="/pages/Withdraw" element={<Withdraw/>}/>
            <Route path="/pages/Promotions" element={<Promotions/>}/>
            
            <Route path="/pages/Blog" element={<Blog />} />
            <Route path="/forum" element={<ForumPage />} />
            
            <Route exact path="/pages/contest" element={<Contest />} />
            <Route exact path="/pages/fantasydraft/:id" element={<FantasyDraft />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
