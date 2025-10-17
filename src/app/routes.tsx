import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../presentation/pages/Home";
import IRM from "../presentation/pages/IRM";
import UsoImportancia from "../presentation/pages/UsoImportancia";
import DifusionDTI from "../presentation/pages/DifusionDTI";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/irm-secuencias" element={<IRM />} />
        <Route path="/uso-importancia" element={<UsoImportancia />} />
        <Route path="/difusion-dti" element={<DifusionDTI />} />
      </Routes>
    </BrowserRouter>
  );
}
