import NenixFacebook from "../../components/icons/NenixFacebook";
import NenixInstagram from "../../components/icons/NenixInstagram";
import NenixLinkedin from "../../components/icons/NenixLinkedin";
import NenixListCheckmark from "../../components/icons/NenixListCheckmark";
import NenixStars from "../../components/icons/NenixStars";
import NenixUzteksKalbu from "../../components/Nenix/NenixUzteksKalbu";

const NenixApieMus = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="container px-6">
          <div className="mt-[78px] mb-[167px] relative bg-[#0C1A3A] rounded-[20px]">
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
          <div className="flex items-center gap-[18.72px] mt-[100px] mb-[134px]">
            <div>
              <div className="mb-8">
                <h2 className="text-[#FF6600] font-bold mb-6">Mūsų Misija</h2>
                <h3 className="text-[64px] leading-[75px] font-semibold max-w-[568px]">
                  Sustiprinti Jūsų verslą.
                </h3>
              </div>
              <p className="text-[#F4F4F4] text-lg leading-[23.44px] max-w-[568px] mb-12">
                Mūsų tikslas - stiprinti jūsų verslą. Mes siūlome individualų
                požiūrį ir kūrybiškus sprendimus, kurie garantuoja efektyvumą ir
                aukštą kokybę.
              </p>
              <ul className="grid grid-cols-2 gap-2 max-w-[644px]">
                <li className="flex gap-[5px]">
                  <div className="mt-[4px]">
                    <NenixListCheckmark />
                  </div>
                  <p className="text-lg leading-[23.44px]">
                    Prisitaikome prie jūsų unikalių poreikių
                  </p>
                </li>
                <li className="flex gap-[5px]">
                  <div className="mt-[4px]">
                    <NenixListCheckmark />
                  </div>
                  <p className="text-lg leading-[23.44px]">
                    Bendradarbiaujame su jumis nuo pradžios iki pabaigos.
                  </p>
                </li>
                <li className="flex gap-[5px]">
                  <div className="mt-[4px]">
                    <NenixListCheckmark />
                  </div>
                  <p className="text-lg leading-[23.44px]">
                    Kuriame inovatyvias ir pritaikomas strategijas
                  </p>
                </li>
                <li className="flex gap-[5px]">
                  <div className="mt-[4px]">
                    <NenixListCheckmark />
                  </div>
                  <p className="text-lg leading-[23.44px]">
                    Suteikiame greitus ir į rezultatus orientuotus sprendimus.
                  </p>
                </li>
                <li className="flex gap-[5px]">
                  <div className="mt-[4px]">
                    <NenixListCheckmark />
                  </div>
                  <p className="text-lg leading-[23.44px]">
                    Turime gilų supratimą apie skaitmeninio pasaulio subtilybes
                  </p>
                </li>
                <li className="flex gap-[5px]">
                  <div className="mt-[4px]">
                    <NenixListCheckmark />
                  </div>
                  <p className="text-lg leading-[23.44px]">
                    Siūlome tik aukščiausios kokybės paslaugas ir produktus.
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative w-[737.46px] h-[725.57px]">
              <img
                src="/nenix/generated_apie_mus.jpg"
                alt=""
                className="absolute bottom-0 right-0 w-[285.99px] h-[343.86px] object-cover rounded-[20px]"
              />
              <div className="absolute flex flex-col items-center bg-white p-5 rounded-[20px] z-10 top-[71px] left-[316px]">
                <span className="text-[#0C1A3AE5] text-lg">
                  Komandos nariai
                </span>
                <div className="mt-[10px]">
                  <img
                    src="/nenix/komandos_narys1.png"
                    alt=""
                    className="w-10 h-10 rounded-full inline-block relative z-50"
                  />
                  <img
                    src="/nenix/komandos_narys2.png"
                    alt=""
                    className="w-10 h-10 rounded-full object-cover inline-block -ml-3 relative z-40"
                  />
                  <img
                    src="/nenix/komandos_narys3.png"
                    alt=""
                    className="w-10 h-10 rounded-full object-cover inline-block -ml-3 relative z-30"
                  />
                  <img
                    src="/nenix/komandos_narys4.png"
                    alt=""
                    className="w-10 h-10 rounded-full object-cover inline-block -ml-3 relative z-20"
                  />
                  <img
                    src="/nenix/komandos_narys5.png"
                    alt=""
                    className="w-10 h-10 rounded-full object-cover inline-block -ml-3 relative z-10"
                  />
                  <img
                    src="/nenix/komandos_narys6.png"
                    alt=""
                    className="w-10 h-10 rounded-full object-cover inline-block -ml-3"
                  />
                </div>
              </div>
              <img
                src="/nenix/grupe_zmoniu.jpg"
                alt="Grupe zmoniu"
                className="w-[326.72px] h-[449.42px] object-cover rounded-[20px] opacity-50 mb-[19.5px]"
              />
              <div className="flex ml-[36.48px] gap-[21px]">
                <div className="grid gap-[15px] p-5 h-[144px]">
                  <span className="font-roboto-serif font-bold text-[45px] leading-[52.7px] text-[#F4F4F4] text-center">
                    10k
                  </span>
                  <span className="max-w-[140px] text-center">
                    Pokalbiai per mėnesį
                  </span>
                </div>
                <div className="w-[1px] h-[124px] bg-white mt-5"></div>
                <div className="grid gap-[15px] p-5 mt-16">
                  <span className="font-roboto-serif font-bold text-[45px] leading-[52.7px] text-[#F4F4F4] text-center">
                    95+
                  </span>
                  <span className="max-w-[105px] text-center">
                    Pabaigtų projektų
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="container px-6">
          <div className="my-[100px]">
            <h2 className="text-center text-[#0C1A3A] text-[4rem] font-semibold leading-[74.94px] mb-20">
              Mūsų komanda
            </h2>
            <div className="grid grid-cols-3 gap-[74px]">
              <div className="grid gap-4 relative">
                <div className="flex absolute gap-[20px] z-10 right-4 top-4">
                  <button className="flex justify-center items-center w-9 h-9 rounded-full bg-white">
                    <NenixFacebook className="w-[11px] mr-[1px]" />
                  </button>
                  <button className="flex justify-center items-center w-9 h-9 rounded-full bg-white">
                    <NenixInstagram className="w-[18px]" />
                  </button>
                  <button className="flex justify-center items-center w-9 h-9 rounded-full bg-white">
                    <NenixLinkedin className="w-[18px]" />
                  </button>
                </div>
                <img
                  src="/nenix/komanda_1.jpg"
                  alt=""
                  className="w-full h-[500px] object-cover rounded-[20px] brightness-[0.8]"
                />
                <div className="grid gap-[10px]">
                  <h3 className="text-xl text-[#0C1A3A] font-semibold">
                    Eglė Petrauskaitė
                  </h3>
                  <p className="text-[#0C1A3AE5]">
                    Įkūrėja ir generalinė direktorė
                  </p>
                </div>
              </div>
              <div className="grid gap-4 relative">
                <div className="flex absolute gap-[20px] z-10 right-4 top-4">
                  <button className="flex justify-center items-center w-9 h-9 rounded-full bg-white">
                    <NenixFacebook className="w-[11px] mr-[1px]" />
                  </button>
                  <button className="flex justify-center items-center w-9 h-9 rounded-full bg-white">
                    <NenixInstagram className="w-[18px]" />
                  </button>
                  <button className="flex justify-center items-center w-9 h-9 rounded-full bg-white">
                    <NenixLinkedin className="w-[18px]" />
                  </button>
                </div>
                <img
                  src="/nenix/komanda_2.jpg"
                  alt=""
                  className="w-full h-[500px] object-cover rounded-[20px]"
                />
                <div className="grid gap-[10px]">
                  <h3 className="text-xl text-[#0C1A3A] font-semibold">
                    Mantas Vaitkus
                  </h3>
                  <p className="text-[#0C1A3AE5]">Rinkodaros vadovas</p>
                </div>
              </div>
              <div className="grid gap-4 relative">
                <div className="flex absolute gap-[20px] z-10 right-4 top-4">
                  <button className="flex justify-center items-center w-9 h-9 rounded-full bg-white">
                    <NenixFacebook className="w-[11px] mr-[1px]" />
                  </button>
                  <button className="flex justify-center items-center w-9 h-9 rounded-full bg-white">
                    <NenixInstagram className="w-[18px]" />
                  </button>
                  <button className="flex justify-center items-center w-9 h-9 rounded-full bg-white">
                    <NenixLinkedin className="w-[18px]" />
                  </button>
                </div>
                <img
                  src="/nenix/komanda_3.jpg"
                  alt=""
                  className="w-full h-[500px] object-cover rounded-[20px]"
                />
                <div className="grid gap-[10px]">
                  <h3 className="text-xl text-[#0C1A3A] font-semibold">
                    Aušra Kazlauskienė
                  </h3>
                  <p className="text-[#0C1A3AE5]">Rinkodaros vadovė</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NenixUzteksKalbu className="mb-24" />
    </>
  );
};

export default NenixApieMus;
