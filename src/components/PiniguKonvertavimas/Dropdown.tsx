import { useState } from "react";

import "./Dropdown.css";

type Option = {
  value: string;
  title: string;
};

type DropdownProps = {
  options: Option[];
  changeHandler: (option: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, changeHandler }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].title);
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false);

  const handleSelectToggle = () => {
    setOptionsOpen((prevValue) => !prevValue);
  };

  const handleOptionChange = (option: Option) => {
    setSelectedOption(option.title);
    setOptionsOpen(false);
    changeHandler(option.value);
  };

  return (
    <div className="relative select-none">
      <div
        className={`relative rounded-lg p-4 ${
          optionsOpen
            ? "bg-[#232323] outline-none text-white"
            : "bg-[#191919] text-[#D4D4D4]"
        } outline-2 outline-white outline-offset-0 transition`}
        onClick={handleSelectToggle}
      >
        <span className="pr-8">{selectedOption}</span>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <img
            src="./pinigu-konvertavimas/chevron-down.svg"
            alt=""
            className={`w-6 h-6 ${optionsOpen ? "rotate-180" : ""} transition`}
          />
        </div>
      </div>
      <div className="absolute z-20 bg-[#232323] w-full rounded-lg mt-2 overflow-hidden">
        <ul
          className={`text-white ${
            optionsOpen
              ? "overflow-y-auto max-h-[208px]"
              : "overflow-hidden max-h-0"
          } dropdown-list transition-all`}
        >
          {options.map((option, key) => (
            <li
              key={key}
              onClick={() => handleOptionChange(option)}
              className="py-[14px] px-4"
            >
              {option.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
