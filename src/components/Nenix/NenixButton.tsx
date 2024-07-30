import NenixChevronRight from "./NenixChevronRight";

type NenixButtonProps = {
  color?: "white" | "blue";
  trial?: boolean;
  children: React.ReactNode;
  className?: string;
};

const NenixButton: React.FC<NenixButtonProps> = ({
  color = "white",
  trial,
  children,
  className,
}) => {
  return (
    <button
      className={`flex group items-center ${
        trial ? "gap-[0.6125rem] pl-3 pr-5 py-3" : "px-4 py-2"
      } ${
        color === "white"
          ? "bg-white text-[#0C1A3A]"
          : "bg-[#0C1A3A] text-[#FFFFFFE5]"
      } hover:bg-[#FF6600] hover:text-[#0C1A3A] transition rounded-full text-lg ${className}`}
    >
      {trial && (
        <div
          className={`flex justify-center items-center w-7 h-7 ${
            color === "white" ? "bg-[#0C1A3A]" : "bg-white"
          } group-hover:bg-[#0C1A3A] rounded-full transition`}
        >
          <NenixChevronRight color={color === "white" ? "blue" : "white"} />
        </div>
      )}
      {children}
    </button>
  );
};

export default NenixButton;
