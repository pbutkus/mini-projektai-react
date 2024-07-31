import { Outlet } from "react-router-dom";
import "../style/Nenix.css";
import NenixFooter from "../components/Nenix/NenixFooter";
import NenixNav from "../components/Nenix/NenixNav";

const Nenix = () => {
  return (
    <div className="nenix relative">
      <NenixNav />
      <Outlet />
      <NenixFooter />
    </div>
  );
};

export default Nenix;
