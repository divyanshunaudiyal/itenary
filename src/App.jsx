// import { useState } from "react";
import "./App.css";
import Tentativeitenary from "./pages/TentativeItenary/Tentativeitenary";
import Detaileditenary from "./pages/DetailedItenary/Detaileditenary";
import VisaInfo from "./pages/Visainfo/Visainfo";
import Locationinfo from "./pages/Locationinfo/Locationinfo";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="tentativeitenary" element={<Tentativeitenary />} />
          <Route path="detaileditenary" element={<Detaileditenary />} />
          <Route path="location" element={<Locationinfo />} />
          <Route path="visa" element={<VisaInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
