import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import SurahDetails from "./Pages/Home/SurahDetails/SurahDetails";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surah/:surahId" element={<SurahDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
