import NenixButton from "./NenixButton";

type NenixUzteksKalbuProps = {
  className?: string;
};

const NenixUzteksKalbu: React.FC<NenixUzteksKalbuProps> = ({ className }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="container px-6">
        <div className="bg-[#0C1A3AE5] py-11 rounded-[20px]">
          <h2 className="text-center text-white font-bold text-[45px]">
            Užteks kalbų, pradėkime darbą!
          </h2>
          <div className="flex justify-center mt-6">
            <NenixButton>Susisiekti</NenixButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NenixUzteksKalbu;
