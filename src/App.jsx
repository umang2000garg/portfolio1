import React from "react";
import { Routes, Route } from "react-router-dom";
import UmangPortfolio from "./app/UmangPortfolio";
import Featured from "./pages/Featured";
import Industry from "./pages/Industry";
import Internships from "./pages/Internships";
import Freelance from "./pages/Freelance";
import Others from "./pages/Others";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<UmangPortfolio />} />
      <Route path="/featured" element={<Featured />} />
      <Route path="/industry" element={<Industry />} />
      <Route path="/Internships" element={<Internships />} />
      <Route path="/freelance" element={<Freelance />} />
      <Route path="/others" element={<Others />} />
    </Routes>
  );
}
