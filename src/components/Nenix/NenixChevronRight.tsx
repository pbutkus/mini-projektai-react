import React from "react";

type NenixChevronRightProps = {
  color?: "white" | "blue";
};

const NenixChevronRight: React.FC<NenixChevronRightProps> = ({
  color = "white",
}) => {
  return (
    <svg
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L5.66667 5.66667L1 10.3333"
        stroke={color === "white" ? "#0C1A3A" : "white"}
        className="group-hover:stroke-[#FF6600]"
        strokeWidth="1.55439"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NenixChevronRight;
