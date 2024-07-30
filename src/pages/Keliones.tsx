import { Outlet } from "react-router-dom";
import KelionesNav from "../components/Keliones/KelionesNav";
// import KelionesPagrindinis from "./Keliones/KelionesPagrindinis";
import KelionesFooter from "../components/Keliones/KelionesFooter";

const Keliones = () => {
  return (
    <div className="font-plus-jakarta-sans bg-[#F9F9F9]">
      <KelionesNav />
      <Outlet />
      <KelionesFooter />
    </div>
  );
};

export default Keliones;
