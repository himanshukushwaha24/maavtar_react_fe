import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Rewards from "./pages/Rewards";
import Rules from "./pages/Rules";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/home" exact component={<Home/>} />
          <Route path="/rewards" component={Rewards} />
          <Route path="/rules" component={Rules} />
          <Route path="/profile" component={Profile} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
