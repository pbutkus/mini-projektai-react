import Krepselis from "../components/PrekiuKrepselis/Krepselis";

const PrekiuKrepselis = () => {
  return (
    <div className="min-h-screen min-w-screen flex justify-center font-roboto bg-[#E5D4FB]">
      <div className="max-w-[1320px] w-full mt-[133px]">
        <h1 className="font-bold text-[40px] mb-8">Prekių krepšelis</h1>
        <Krepselis />
      </div>
    </div>
  );
};

export default PrekiuKrepselis;
