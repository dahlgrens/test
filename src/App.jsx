import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"; // Import your Home component
import Depression from "./Components/Diagnosis/Depression"; // Import your Depression component
import Stress from "./Components/Diagnosis/Stress"; // Import your Stress component
import PTSD from "./Components/Diagnosis/PTSD"; // Import your PTSD component
import GAD from "./Components/Diagnosis/GAD"; // Import your GAD component
import Insomni from "./Components/Diagnosis/Insomni"; // Import your Insomnia component
import PMDS from "./Components/Diagnosis/PMDS"; // Import your PMDS component
import Footer from "./Components/Footer";
import SocialFobi from "./Components/Diagnosis/SocialFobi";
import Paniksyndrom from "./Components/Diagnosis/Paniksyndrom";
import MenyBotton from "./Components/MenyBotton";

function App() {
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className="app">
      <Header />
      <MenyBotton toggleNavbar={toggleNavbar} />
      <div className="main-container">
        <Navbar isNavbarVisible={isNavbarVisible} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Depression" element={<Depression />} />
          <Route path="/Stress" element={<Stress />} />
          <Route path="/PTSD" element={<PTSD />} />
          <Route path="/GAD" element={<GAD />} />
          <Route path="/SocialFobi" element={<SocialFobi />} />
          <Route path="/Paniksyndrom" element={<Paniksyndrom />} />
          <Route path="/PMDS" element={<PMDS />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
