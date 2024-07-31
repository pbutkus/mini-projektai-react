import { Link } from "react-router-dom";
import NenixUzteksKalbu from "../../components/Nenix/NenixUzteksKalbu";

const NenixPortfolio = () => {
  return (
    <>
      <div className="flex justify-center pt-[78px] mb-36">
        <div className="container px-6">
          <div className="flex justify-center py-[108px] bg-[#0C1A3A] rounded-[20px]">
            <h1 className="text-[#FBFBFB] font-bold text-[77px]">
              Mūsų Portfelis
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-[118px]">
        <div className="container px-6">
          <div className="grid grid-cols-2 gap-[72px]">
            <Link to={"/nenix/portfolio/projektas"} className="grid gap-6">
              <img
                src="/nenix/darbai1.jpg"
                alt=""
                className="w-full h-[540px] object-cover rounded-[20px]"
              />
              <div className="grid">
                <h2 className="text-3xl">
                  Tinklalapių vartotojo sąsajos dizainas
                </h2>
                <p className="text-lg">Kūrybinis vartotojo sąsajos dizainas</p>
              </div>
            </Link>
            <Link to={"/nenix/portfolio/projektas"} className="grid gap-6">
              <img
                src="/nenix/darbai2.jpg"
                alt=""
                className="w-full h-[540px] object-cover rounded-[20px]"
              />
              <div className="grid">
                <h2 className="text-3xl">Kurti skaitmeninę strategiją</h2>
                <p className="text-lg">Socialinių tinklų Marketingas</p>
              </div>
            </Link>
            <Link to={"/nenix/portfolio/projektas"} className="grid gap-6">
              <img
                src="/nenix/darbai3.jpg"
                alt=""
                className="w-full h-[540px] object-cover rounded-[20px]"
              />
              <div className="grid">
                <h2 className="text-3xl">Vartotojo sąsajos dizainas</h2>
                <p className="text-lg">Kūrybinis logotipo atnaujinimas</p>
              </div>
            </Link>
            <Link to={"/nenix/portfolio/projektas"} className="grid gap-6">
              <img
                src="/nenix/darbai4.jpg"
                alt=""
                className="w-full h-[540px] object-cover rounded-[20px]"
              />
              <div className="grid">
                <h2 className="text-3xl">Reklaminių banerių kūrimas</h2>
                <p className="text-lg">Grafinis dizainas</p>
              </div>
            </Link>
            <Link to={"/nenix/portfolio/projektas"} className="grid gap-6">
              <img
                src="/nenix/darbai5.jpg"
                alt=""
                className="w-full h-[540px] object-cover rounded-[20px]"
              />
              <div className="grid">
                <h2 className="text-3xl">Grafinis dizainas</h2>
                <p className="text-lg">Grafinis dizainas</p>
              </div>
            </Link>
            <Link to={"/nenix/portfolio/projektas"} className="grid gap-6">
              <img
                src="/nenix/darbai6.jpg"
                alt=""
                className="w-full h-[540px] object-cover rounded-[20px]"
              />
              <div className="grid">
                <h2 className="text-3xl">Vartotojo sąsajos dizainas</h2>
                <p className="text-lg">Kūrybinis logotipo atnaujinimas</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <NenixUzteksKalbu className="mb-24" />
    </>
  );
};

export default NenixPortfolio;
