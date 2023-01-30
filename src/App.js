import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Planet from "./components/Planet";
import useWindowSize from "./Hooks/useWindowSize";
import { Routes, Route } from "react-router-dom";
import data from "./data.json";

function App() {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const screenWidth = useWindowSize();


  return (
    <>
      <NavBar
        showBurgerMenu={showBurgerMenu}
        setShowBurgerMenu={setShowBurgerMenu}
        screenWidth={screenWidth}
      />
      {showBurgerMenu && screenWidth <= 500 ? null : (
      <Routes>
        <Route path="/" element={<Planet planet={data[0]} btnColor ='#419EBB'/>} />
        <Route path="/venus" element={<Planet planet={data[1]} btnColor='#EDA249'/>} />
        <Route path="/earth" element={<Planet planet={data[2]} btnColor='#6D2ED5'/>} />
        <Route path="/mars" element={<Planet planet={data[3]} btnColor='#D14C32'/>} />
        <Route path="/jupiter" element={<Planet planet={data[4]} btnColor='#D83A34'/>} />
        <Route path="/saturn" element={<Planet planet={data[5]} btnColor='#CD5120'/>} />
        <Route path="/uranus" element={<Planet planet={data[6]} btnColor='#1EC1A2'/>} />
        <Route path="/neptune" element={<Planet planet={data[7]} btnColor='#2D68F0'/>} />
      </Routes>
      )}
    </>
  );
}


export default App;
