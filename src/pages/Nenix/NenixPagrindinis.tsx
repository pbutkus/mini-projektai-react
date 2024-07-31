import NenixBulb from "../../components/icons/NenixBulb";
import NenixCommunication from "../../components/icons/NenixCommunication";
import NenixDiamond from "../../components/icons/NenixDiamond";
import NenixDoubleCheckmark from "../../components/icons/NenixDoubleCheckmark";
import NenixEnvelope from "../../components/icons/NenixEnvelope";
import NenixMegaphone from "../../components/icons/NenixMegaphone";
import NenixPalette from "../../components/icons/NenixPalette";
import NenixPen from "../../components/icons/NenixPen";
import NenixPencil from "../../components/icons/NenixPencil";
import NenixSettings from "../../components/icons/NenixSettings";
import NenixButton from "../../components/Nenix/NenixButton";
import NenixElementas from "../../components/Nenix/NenixElementas";
import NenixElementas2 from "../../components/Nenix/NenixElementas2";

const NenixPagrindinis = () => {
  return (
    <>
      <div className="nenix-hero relative overflow-hidden flex justify-center pt-[10rem] pb-[7.875rem]">
        <div className="absolute -top-16 -right-36">
          <img src="/nenix/paveiksliukas_su_elipsem.png" alt="" />
        </div>
        <div className="absolute -left-9 hidden 2xl:block">
          <img src="/nenix/ornament.png" alt="" />
        </div>
        <div className="container px-6 z-20">
          <div className="mb-[12.625rem]">
            <h1 className="font-bold text-[4rem] text-white max-w-[631px] leading-[4.688rem] mb-6">
              Pasiruošę pakelti{" "}
              <span className="text-[#FF6600]">savo verslo augimą</span> į kitą
              lygį?
            </h1>
            <p className="text-[#FBFBFB] max-w-[557px] mb-8">
              Išbandykite nemokamą bandomąją versiją ir keliaukite į naują
              verslo lygį kartu su mumis!
            </p>
            <NenixButton color="white" trial>
              Išbandykite nemokamai
            </NenixButton>
          </div>
          <div>
            <h2 className="text-[#FF6600] font-semibold text-xl mb-[0.313rem]">
              Mumis pasitiki pirmaujantys prekės ženklai
            </h2>
            <div className="flex items-center">
              <img src="/nenix/mindfulness.png" alt="Mindfulness" />
              <img src="/nenix/leafe.png" alt="Leafe" />
              <img src="/nenix/automation.png" alt="Automation" />
              <img src="/nenix/greenish.png" alt="Greenish" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="container px-6">
          <div className="flex justify-center mt-[6.25rem]">
            <div className="flex flex-col max-w-[891px] gap-6 mb-[5rem]">
              <h2 className="text-center text-[#FF6600] font-bold text-[1.875rem]">
                Mūsų Paslaugos
              </h2>
              <h3 className="font-bold text-[4rem] text-center text-[#0C1A3A] leading-[4.688rem]">
                Paslaugos, kurios turės didelį poveikį jūsų verslui
              </h3>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-[1.875rem] mb-20">
              <div className="p-[2.813rem] bg-[#0C1A3A] rounded-[20px]">
                <div className="flex justify-center items-center w-[80px] h-[80px] bg-white rounded-full mb-[3.875rem]">
                  <NenixPencil />
                </div>
                <div className="flex flex-col gap-4 text-white">
                  <h4 className="font-medium text-[1.563rem]">
                    Turinio Marketingas
                  </h4>
                  <p className="text-[#F4F4F4] text-lg max-w-[20.75rem]">
                    Mūsų specialistai kuria įtraukiantį turinį, kuris iškarto
                    patiks jūsų auditorijai ir skatins natūralų srautą.
                  </p>
                </div>
              </div>
              <div className="p-[2.813rem] bg-[#F4F4F4] rounded-[20px]">
                <div className="flex justify-center items-center w-[80px] h-[80px] bg-[#0C1A3A] rounded-full mb-[3.875rem]">
                  <NenixPen />
                </div>
                <div className="flex flex-col gap-4 text-[#0C1A3A]">
                  <h4 className="font-medium text-[1.563rem]">
                    Grafinis Dizainas
                  </h4>
                  <p className="text-[#0C1A3AE5] text-lg max-w-[20.75rem]">
                    Pasinaudokite vizualinio pasakojimo galia su mūsų ekspertų
                    grafinio dizaino paslaugomis, pritaikytomis kūrybiškam jūsų
                    prekės ženklo kilimui ir dėmesio pritraukimui.
                  </p>
                </div>
              </div>
              <div className="p-[2.813rem] bg-[#F4F4F4] rounded-[20px]">
                <div className="flex justify-center items-center w-[80px] h-[80px] bg-[#0C1A3A] rounded-full mb-[3.875rem]">
                  <NenixMegaphone />
                </div>
                <div className="flex flex-col gap-4 text-[#0C1A3A]">
                  <h4 className="font-medium text-[1.563rem]">
                    Skaitmeninis Marketingas
                  </h4>
                  <p className="text-[#0C1A3AE5] text-lg max-w-[20.75rem]">
                    Pakelkite savo prekės ženklą internete su mūsų duomenimis
                    paremtomis skaitmeninio marketingo strategijomis. Nuo SEO ir
                    turinio rinkodaros
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-[1.875rem] mb-20">
              <div className="p-[2.813rem] bg-[#F4F4F4] rounded-[20px]">
                <div className="flex justify-center items-center w-[80px] h-[80px] bg-[#0C1A3A] rounded-full mb-[3.875rem]">
                  <NenixPalette />
                </div>
                <div className="flex flex-col gap-4 text-[#0C1A3A]">
                  <h4 className="font-medium text-[1.563rem]">
                    Tinklalapių Dizainas
                  </h4>
                  <p className="text-[#0C1A3AE5] text-lg max-w-[20.75rem]">
                    Mes specializuojamės kuriant vizualiai įspūdingas,
                    naudotojui patrauklias interneto svetaines, kurios atitinka
                    jūsų prekės identitetą ir teikia išskirtinę patirtį.
                  </p>
                </div>
              </div>
              <div className="p-[2.813rem] bg-[#F4F4F4] rounded-[20px]">
                <div className="flex justify-center items-center w-[80px] h-[80px] bg-[#0C1A3A] rounded-full mb-[3.875rem]">
                  <NenixCommunication />
                </div>
                <div className="flex flex-col gap-4 text-[#0C1A3A]">
                  <h4 className="font-medium text-[1.563rem]">
                    IT konsultacijos
                  </h4>
                  <p className="text-[#0C1A3AE5] text-lg max-w-[20.75rem]">
                    IT konsultacija, tai paslaugų teikimo praktika, kurioje
                    teikiame patarimus ir įgyvendinimo paslaugas, susijusias su
                    informacinių technologijų sritimi.
                  </p>
                </div>
              </div>
              <div className="p-[2.813rem] bg-[#F4F4F4] rounded-[20px]">
                <div className="flex justify-center items-center w-[80px] h-[80px] bg-[#0C1A3A] rounded-full mb-[3.875rem]">
                  <NenixDiamond />
                </div>
                <div className="flex flex-col gap-4 text-[#0C1A3A]">
                  <h4 className="font-medium text-[1.563rem]">
                    Prekės ženklo identitetas
                  </h4>
                  <p className="text-[#0C1A3AE5] text-lg max-w-[20.75rem]">
                    Tai apima unikalios ir atpažįstamos tapatybės kūrimą, kuri
                    išskiria prekės ženklą iš konkurentų bei atitinka tikslinę
                    auditoriją.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#0C1A3A]">
        <div className="container px-6">
          <div className="flex gap-[4.375rem] py-[6.25rem]">
            <div className="max-w-[46.5rem] max-h-[43.938rem]">
              <img src="/nenix/apie_mus_nuotraukos.png" alt="Apie mus" />
            </div>
            <div className="flex flex-col py-[5.063rem]">
              <h2 className="text-[#FF6600] font-semibold text-[1.875rem] mb-6">
                Apie mus
              </h2>
              <h3 className="font-semibold text-[#FBFBFB] text-[4rem] leading-[74.94px] max-w-[586px] mb-6">
                Pagrindinė misija slypinti už visų mūsų darbų
              </h3>
              <p className="text-[#F4F4F4] max-w-[568px] text-lg leading-[23.44px] mb-6">
                Sukurti technologijų sprendimus, kurie transformuoja ir
                praturtina verslo veiklą..
              </p>
              <div className="flex gap-14 mb-8">
                <div className="flex flex-col">
                  <span className="font-roboto-serif text-[#FF6600] font-semibold text-[2.813rem]">
                    330 +
                  </span>
                  <span className="text-[#F4F4F4]">Verslams padėta</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-roboto-serif text-[#FF6600] font-semibold text-[2.813rem]">
                    230 +
                  </span>
                  <span className="text-[#F4F4F4]">Sugeneruota pajamų</span>
                </div>
              </div>
              <div>
                <NenixButton trial color="white">
                  Išbandykite nemokamai
                </NenixButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center overflow-hidden">
        <div className="container px-6 mt-28">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-[#FF6600] text-center text-[30px] font-semibold leading-[35.13px]">
              Procesas
            </h2>
            <h3 className="text-[#0C1A3A] text-center text-[4rem] font-semibold max-w-[853px] leading-[74.94px]">
              Procesas, kuris skatina pažangą
            </h3>
          </div>
          <div className="grid grid-cols-4 mt-[183px]">
            <div className="relative">
              <div className="absolute bottom-0">
                <NenixElementas />
              </div>
              <div className="flex items-center absolute -top-[6.2rem] left-16 w-full gap-2">
                <div className="flex items-center justify-center w-[79px] h-[79px] bg-[#0C1A3AE5] rounded-full">
                  <NenixBulb />
                </div>
                <h4 className="text-[#0C1A3AE5] font-semibold text-3xl max-w-[191.11px] leading-[35.33px]">
                  Idėjų generavimas
                </h4>
              </div>
              <p className="max-w-[250px] leading-[20.83px] pl-[40px] pb-[50px] text-[#0C1A3AE5]">
                Ideacijos procesas yra esminė fazė dizaino procese, kurioje
                vyksta kūrybinis mąstymas ir idėjų generavimas.
              </p>
            </div>
            <div className="relative">
              <div className="absolute bottom-0">
                <NenixElementas />
              </div>
              <div className="flex items-center absolute -top-[6.2rem] left-16 w-full gap-2">
                <div className="flex items-center justify-center w-[79px] h-[79px] bg-[#0C1A3AE5] rounded-full">
                  <NenixEnvelope />
                </div>
                <h4 className="text-[#0C1A3AE5] font-semibold text-3xl max-w-[191.11px] leading-[35.33px]">
                  Tyrimai
                </h4>
              </div>
              <p className="max-w-[250px] leading-[20.83px] pl-[40px] pb-[50px] text-[#0C1A3AE5]">
                Tyrimai yra kritiška dizaino proceso dalis, padedanti
                dizaineriams suprasti problemą.
              </p>
            </div>
            <div className="relative">
              <div className="absolute bottom-0">
                <NenixElementas />
              </div>
              <div className="flex items-center absolute -top-[6.2rem] left-16 w-full gap-2">
                <div className="flex items-center justify-center w-[79px] h-[79px] bg-[#0C1A3AE5] rounded-full">
                  <NenixSettings />
                </div>
                <h4 className="text-[#0C1A3AE5] font-semibold text-3xl max-w-[191.11px] leading-[35.33px]">
                  Kūryba
                </h4>
              </div>
              <p className="max-w-[250px] leading-[20.83px] pl-[40px] pb-[50px] text-[#0C1A3AE5]">
                Dizaino kūrimo procesas apima keletą pagrindinių žingsnių,
                siekiant užtikrinti aiškumą, efektyvumą ir sėkmingą
                įgyvendinimą.
              </p>
            </div>
            <div className="relative">
              <div className="absolute bottom-0">
                <NenixElementas2 />
              </div>
              <div className="flex items-center absolute -top-[6.2rem] left-16 w-full gap-2">
                <div className="flex items-center justify-center w-[79px] h-[79px] bg-[#0C1A3AE5] rounded-full">
                  <NenixDoubleCheckmark />
                </div>
                <h4 className="text-[#0C1A3AE5] font-semibold text-3xl max-w-[191.11px] leading-[35.33px]">
                  Testavimas
                </h4>
              </div>
              <p className="max-w-[250px] leading-[20.83px] pl-[40px] pb-[50px] text-[#0C1A3AE5]">
                Testavimas yra esminė dizaino proceso stadija, užtikrinanti, kad
                produktas ar sistema atitiktų nustatytus reikalavimus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-[209px]">
        <div className="container px-6">
          <div className="mt-[145px]">
            <h2 className="text-center text-[4rem] leading-[74.94px] font-semibold text-[#0C1A3A] mb-[85px]">
              Naujausi darbai
            </h2>
          </div>
          <div className="grid grid-cols-2">
            <div className="grid gap-[72px] justify-start">
              <div className="grid gap-6">
                <img
                  src="/nenix/darbai1.jpg"
                  alt=""
                  className="max-w-[664px] max-h-[450px] object-cover rounded-[20px]"
                />
                <div className="grid gap-[10px]">
                  <h3 className="font-semibold text-[30px] text-[#0C1A3A] leading-[35.13px]">
                    Tinklalapių vartotojo sąsajos dizainas
                  </h3>
                  <p className="text-[#0C1A3AE5] leading-[23.44px]">
                    Kūrybinis vartotojo sąsajos dizainas
                  </p>
                </div>
              </div>
              <div className="grid gap-6">
                <img
                  src="/nenix/darbai3.jpg"
                  alt=""
                  className="max-w-[664px] max-h-[450px] object-cover rounded-[20px]"
                />
                <div className="grid gap-[10px]">
                  <h3 className="font-semibold text-[30px] text-[#0C1A3A] leading-[35.13px]">
                    Vartotojo sąsajos dizainas
                  </h3>
                  <p className="text-[#0C1A3AE5] leading-[23.44px]">
                    Kūrybinis logotipo atnaujinimas
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-[72px] justify-end">
              <div className="flex w-full justify-end">
                <NenixButton trial color="blue">
                  Išbandykite nemokamai
                </NenixButton>
              </div>
              <div className="grid gap-6">
                <img
                  src="/nenix/darbai2.jpg"
                  alt=""
                  className="max-w-[664px] max-h-[450px] object-cover rounded-[20px]"
                />
                <div className="grid gap-[10px]">
                  <h3 className="font-semibold text-[30px] text-[#0C1A3A] leading-[35.13px]">
                    Kurti skaitmeninę strategiją
                  </h3>
                  <p className="text-[#0C1A3AE5] leading-[23.44px]">
                    Socialinių tinklų Marketingas
                  </p>
                </div>
              </div>
              <div className="grid gap-6">
                <img
                  src="/nenix/darbai4.jpg"
                  alt=""
                  className="max-w-[664px] max-h-[450px] object-cover rounded-[20px]"
                />
                <div className="grid gap-[10px]">
                  <h3 className="font-semibold text-[30px] text-[#0C1A3A] leading-[35.13px]">
                    Reklaminių banerių kūrimas
                  </h3>
                  <p className="text-[#0C1A3AE5] leading-[23.44px]">
                    Grafinis dizainas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-[83px]">
        <div className="container px-6">
          <h2 className="sr-only">Atsiliepimai</h2>
          <div className="flex flex-col items-center justify-center gap-[35px] w-full p-[45px] bg-[#F4F4F4] rounded-[20px]">
            <img
              src="/nenix/atsiliepimas1.jpg"
              alt=""
              className="w-[150px] h-[150px] rounded-full object-top object-cover"
            />
            <p className="text-center max-w-[1313px] text-[25px] leading-[29.28px] text-[#0C1A3A] font-semibold font-roboto-serif">
              “Patirtis su šia įmone buvo labai teigiama. Verslo augimo paslauga
              buvo ne tik kokybiška, bet ir pritaikyta mūsų poreikiams.
              Komunikacija buvo sklandi, o jų gebėjimas greitai reaguoti į mūsų
              pageidavimus paliko teigiamą įspūdį. ”
            </p>
            <div className="flex flex-col items-center gap-[21px]">
              <div className="flex flex-col gap-[5px] items-center">
                <p className="text-[#0C1A3A] font-semibold text-[20px] leading-[23.42px]">
                  Laima Varnaitė
                </p>
                <p className="text-[#0C1A3AE5]">
                  Kūrybinė vadybininkė, UAB Kreatyva
                </p>
              </div>
              <div className="flex gap-[10px]">
                <button>
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="22" cy="22" r="22" fill="#0C1A3A" />
                    <path
                      d="M24.7506 14.2988L17.6006 21.4488L24.7506 28.5988"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="22" cy="22" r="21.5" stroke="#0C1A3A" />
                    <path
                      d="M19.7998 14.2988L27.1313 21.6303L19.7998 28.9618"
                      stroke="#0C1A3A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NenixPagrindinis;
