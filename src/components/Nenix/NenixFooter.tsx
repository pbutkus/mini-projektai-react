import NenixFacebook from "../icons/NenixFacebook";
import NenixInstagram from "../icons/NenixInstagram";
import NenixLinkedin from "../icons/NenixLinkedin";
import NenixButton from "./NenixButton";
import NenixLogo from "./NenixLogo";

const NenixFooter = () => {
  return (
    <footer className="bg-[#0C1A3A]">
      <div className="flex justify-center">
        <div className="container px-6 pt-24 pb-16">
          <div className="flex justify-between text-white border-b border-[#F4F4F4] pb-24">
            <div>
              <NenixLogo type="light" className="mb-6 w-44" />
              <p className="w-[357px]">
                Mes esame strategų ir skaitmeninių inovatorių komanda, suvienyta
                siekiant meistriškumo ir pilnatvės.
              </p>
            </div>
            <div>
              <h2 className="mb-6 font-semibold text-xl">Puslapiai</h2>
              <ul className="flex flex-col gap-4 text-[#F4F4F4]">
                <li>Pagrindinis</li>
                <li>Apie mus</li>
                <li>Kontaktai</li>
                <li>Portfolio</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-semibold text-xl">Straipsniai</h2>
              <ul className="flex flex-col gap-4 text-[#F4F4F4]">
                <li>Stiliaus gidas kas tai?</li>
                <li>Kokie pulapiai yra būtini jūsų svetainei?</li>
                <li>Licencijos: Kas Jos Reikšmė ir Kodėl Tai Svarbu</li>
                <li>Kaip Sekti Naujoves ir Pakeitimus?</li>
                <li>Klaidos puslapis 404, kam jis reikalingas? </li>
                <li>Kaip susikurti saugų slaptažodį? </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-5 font-semibold text-xl">
                Prenumeruokite naujienas
              </h2>
              <div className="flex justify-between w-[433px] bg-white rounded-full p-[0.625rem]">
                <input
                  type="email"
                  className="w-full px-6 text-[#0C1A3A] placeholder:text-[#0C1A3AE5] focus:outline-none focus:border-none"
                  placeholder="Įveskite savo el. paštą čia"
                />
                <NenixButton color="blue">Prenumeruoti</NenixButton>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-white pt-7">
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-xl">
                Autoriaus teisės priklauso
              </h2>
              <p className="text-[#F4F4F4]">Dizainas: VCS+IV</p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-xl">Susisiekite</h2>
              <p className="text-[#F4F4F4]">+370 123 45 745</p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-xl">Adresas</h2>
              <p className="text-[#F4F4F4]">Vytauto gatvė 10A, Kaunas</p>
            </div>
            <div className="flex gap-7">
              <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center">
                <NenixFacebook />
              </div>
              <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center">
                <NenixInstagram />
              </div>
              <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center">
                <NenixLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NenixFooter;
