import NenixStars from "../../components/icons/NenixStars";

const NenixApieMus = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="container px-6">
          <div className="mt-[60px] mb-[167px] relative bg-[#0C1A3A] rounded-[20px]">
            <div>
              <img
                src="/nenix/fotos.png"
                alt=""
                className="absolute right-0 -bottom-16"
              />
            </div>
            <div className="pt-[92px] pl-[72px] z-20">
              <div className="flex flex-col text-white mb-6">
                <span className="text-lg mb-2">Pakelkite verslą į viršų!</span>
                <h1 className="max-w-[549px] text-[4rem] font-semibold leading-[74.94px]">
                  Pakelkite <span className="text-[#FF6600]">savo verslą</span>{" "}
                  į kitą lygį su mumis!
                </h1>
              </div>
              <p className="text-lg leading-[23.44px] text-white max-w-[557px] mb-[40px]">
                Išbandykite nemokamą bandomąją versiją ir keliaukite į naują
                verslo lygį kartu su mumis!
              </p>
              <div className="flex items-center gap-3 pb-[176px]">
                <img
                  src="/nenix/ivertinimas.png"
                  alt=""
                  className="w-[70px] h-[70px] rounded-full"
                />
                <div>
                  <h2 className="text-white text-[20px]">
                    Įvertinta 4.9/5 žvaiždutėmis
                  </h2>
                  <NenixStars />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="container">
          <div className="grid grid-cols-3">
            <div className="flex flex-col items-center gap-[16px] p-[45px]">
              <span className="font-roboto-serif text-[#0C1A3A] text-[45px] leading-[52.7px] font-semibold">
                200+
              </span>
              <h2 className="text-[#0C1A3A] text-[25px] font-semibold leading-[29.28px]">
                Esame didelė komanda
              </h2>
              <p className="text-center text-[#0C1A3AE5]">
                Mes didžiuojamės savo talentinga ir įsipareigojusia komanda,
                kuri kartu siekia aukščiausių rezultatų ir nuolat tobulėja.
              </p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[45px]">
              <span className="font-roboto-serif text-[#0C1A3A] text-[45px] leading-[52.7px] font-semibold">
                99%
              </span>
              <h2 className="text-[#0C1A3A] text-[25px] font-semibold leading-[29.28px]">
                Grafinis Dizainas
              </h2>
              <p className="text-center text-[#0C1A3AE5]">
                99% mūsų teikiamų paslaugų sudaro grafinio dizaino darbai,
                užtikrinantys aukštą kokybę ir kūrybiškumą.
              </p>
            </div>
            <div className="flex flex-col items-center gap-[16px] p-[45px]">
              <span className="font-roboto-serif text-[#0C1A3A] text-[45px] leading-[52.7px] font-semibold">
                1.5M+
              </span>
              <h2 className="text-[#0C1A3A] text-[25px] font-semibold leading-[29.28px]">
                Skaitmeninis Marketingas
              </h2>
              <p className="text-center text-[#0C1A3AE5]">
                Mūsų skaitmeninio marketingo paslaugos pasiekia daugiau nei 1,5
                milijono žmonių, užtikrinant platų ir efektyvų poveikį.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[107px] bg-[#0C1A3A]">
        <div className="container text-white px-6">
          <div className="flex items-center mt-[100px] mb-[134px]">
            <div>
              <div className="mb-8">
                <h2 className="text-[#FF6600] font-bold mb-6">Mūsų Misija</h2>
                <h3 className="text-[64px] leading-[75px] font-semibold max-w-[568px]">
                  Sustiprinti Jūsų verslą.
                </h3>
              </div>
              <p className="text-[#F4F4F4] text-lg leading-[23.44px] max-w-[568px]">
                Mūsų tikslas - stiprinti jūsų verslą. Mes siūlome individualų
                požiūrį ir kūrybiškus sprendimus, kurie garantuoja efektyvumą ir
                aukštą kokybę.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NenixApieMus;
