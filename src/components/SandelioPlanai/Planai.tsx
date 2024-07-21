import PirmasAukstas from "./PirmasAukstas";
import AntrasAukstas from "./AntrasAukstas";
import { useState } from "react";
import "./Planai.css";
import AdministracinesPatalpos from "./AdministracinesPatalpos";

const Planai = () => {
  const [currentTab, setCurrentTab] = useState<number>(1);

  const tabHandler = (tab: number) => {
    setCurrentTab(tab);
  };

  return (
    <div className="flex justify-center font-montserrat">
      <div className="container mt-[244px]">
        <ul className="flex border-b border-[#C4C4C4] font-semibold text-lg text-[#666666] mb-[69px] tabai">
          <li
            onClick={() => tabHandler(1)}
            className={`relative w-[300px] h-[48px] flex items-center justify-center cursor-pointer ${
              currentTab === 1 && "active"
            }`}
          >
            1 Sandėlio aukštas
          </li>
          <li
            onClick={() => tabHandler(2)}
            className={`relative w-[300px] h-[48px] flex items-center justify-center cursor-pointer ${
              currentTab === 2 && "active"
            }`}
          >
            2 Sandėlio aukštas
          </li>
          <li
            onClick={() => tabHandler(3)}
            className={`relative w-[300px] h-[48px] flex items-center justify-center cursor-pointer ${
              currentTab === 3 && "active"
            }`}
          >
            Administracinės patalpos
          </li>
        </ul>
        <div>
          {currentTab === 1 && <PirmasAukstas />}
          {currentTab === 2 && <AntrasAukstas />}
          {currentTab === 3 && <AdministracinesPatalpos />}
        </div>
      </div>
    </div>
  );
};

export default Planai;
