import { Link } from "react-router-dom";
import NenixButton from "./NenixButton";
import NenixLogo from "./NenixLogo";

const NenixNav = () => {
  return (
    <nav className="bg-[#0C1A3A] py-[7px]">
      <div className="flex justify-center">
        <div className="container px-6">
          <div className="flex justify-between">
            <div>
              <NenixLogo type="light" className="w-[134px]" />
            </div>
            <ul className="flex items-center text-[#FBFBFB] gap-[1.875rem] text-xl">
              <li>
                <Link to={"/nenix"}>Pradinis</Link>
              </li>
              <li>
                <Link to={"/nenix/apie-mus"}>Apie mus</Link>
              </li>
              <li>Portfelis</li>
              <li>Kontaktai</li>
              <li>
                <NenixButton color="white">Susisiekite</NenixButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NenixNav;
