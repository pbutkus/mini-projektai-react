import Konvertavimas from "../components/PiniguKonvertavimas/Konvertavimas";

const PiniguKonvertavimas = () => {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-[#010000] font-inter">
      <div className="container grid grid-cols-2 items-center">
        <div className="h-screen max-w-[950px]">
          <img
            src="./pinigu-konvertavimas/parselis.png"
            alt="Paršelis"
            className="object-cover h-full w-full"
          />
        </div>
        <Konvertavimas />
      </div>
    </div>
  );
};

export default PiniguKonvertavimas;
