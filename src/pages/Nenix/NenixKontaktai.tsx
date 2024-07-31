import NenixEnvelope from "../../components/icons/NenixEnvelope";
import NenixFacebook from "../../components/icons/NenixFacebook";
import NenixInstagram from "../../components/icons/NenixInstagram";
import NenixLinkedin from "../../components/icons/NenixLinkedin";
import NenixPhone from "../../components/icons/NenixPhone";
import NenixPin from "../../components/icons/NenixPin";
import NenixButton from "../../components/Nenix/NenixButton";

const NenixKontaktai = () => {
  return (
    <>
      <div className="flex justify-center pt-[78px] mb-[100px]">
        <div className="container px-6">
          <div className="flex justify-between">
            <div className="grid gap-8 divide-y">
              <div className="grid gap-8">
                <h1 className="font-semibold text-[4rem] text-[#0C1A3A]">
                  Pasikalbėkime
                </h1>
                <p className="max-w-[468px] text-lg">
                  Mes bendradarbiaujame su tūkstančiais kūrėjų, verslininkų ir
                  tikromis legendomis.
                </p>
              </div>
              <ul className="grid gap-5 pt-8">
                <li>
                  <div className="flex items-center gap-6">
                    <div className="flex justify-center items-center p-3 w-[50px] h-[50px] rounded-full bg-[#0C1A3A]">
                      <NenixEnvelope />
                    </div>
                    <div>
                      <h2 className="font-semibold text-[#0C1A3A] text-xl leading-[23.42px]">
                        Mūsų el. paštas
                      </h2>
                      <p className="text-[#0C1A3AE5]">hello@example.com</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-6">
                    <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#0C1A3A]">
                      <NenixPhone />
                    </div>
                    <div>
                      <h2 className="font-semibold text-[#0C1A3A] text-xl leading-[23.42px]">
                        Skambinkite mums
                      </h2>
                      <p className="text-[#0C1A3AE5]">+1234567892</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-6">
                    <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#0C1A3A]">
                      <NenixPin />
                    </div>
                    <div>
                      <h2 className="font-semibold text-[#0C1A3A] text-xl leading-[23.42px]">
                        Raskite mus
                      </h2>
                      <p className="text-[#0C1A3AE5]">Open Google Maps</p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="flex pt-8 gap-10 items-center">
                <div>
                  <NenixFacebook />
                </div>
                <div>
                  <NenixInstagram />
                </div>
                <div>
                  <NenixLinkedin />
                </div>
              </div>
            </div>
            <div className="bg-[#F4F4F4] p-[45px] rounded-[20px]">
              <form>
                <div className="grid grid-cols-2 gap-16">
                  <div className="flex flex-col gap-4 min-w-[326px]">
                    <label className="text-[#0C1A3A] text-lg" htmlFor="vardas">
                      Vardas
                    </label>
                    <input
                      className="bg-transparent border-b border-[#DFDFDF]"
                      type="text"
                      id="vardas"
                    />
                  </div>
                  <div className="flex flex-col gap-4 min-w-[326px]">
                    <label className="text-[#0C1A3A] text-lg" htmlFor="pavarde">
                      Pavardė
                    </label>
                    <input
                      className="bg-transparent border-b border-[#DFDFDF]"
                      type="text"
                      id="pavarde"
                    />
                  </div>
                  <div className="flex flex-col gap-4 min-w-[326px]">
                    <label className="text-[#0C1A3A] text-lg" htmlFor="email">
                      El. paštas
                    </label>
                    <input
                      className="bg-transparent border-b border-[#DFDFDF]"
                      type="text"
                      id="email"
                    />
                  </div>
                  <div className="flex flex-col gap-4 min-w-[326px]">
                    <label className="text-[#0C1A3A] text-lg" htmlFor="phone">
                      Telefono Nr.
                    </label>
                    <input
                      className="bg-transparent border-b border-[#DFDFDF]"
                      type="text"
                      id="phone"
                    />
                  </div>
                  <div className="flex flex-col gap-4 min-w-[326px] col-span-2">
                    <label className="text-[#0C1A3A] text-lg" htmlFor="vardas">
                      Žinutė
                    </label>
                    <textarea
                      className="bg-transparent border-b border-[#DFDFDF]"
                      name="zinute"
                      id="zinute"
                    ></textarea>
                  </div>
                </div>
                <NenixButton className="mt-16" color="blue">
                  Siųsti žinutę
                </NenixButton>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-[100px]">
        <div className="container px-6">
          <img
            src="/nenix/zemelapis.png"
            alt="Nenix zemelapyje"
            className="rounded-[20px] w-full h-[314px] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default NenixKontaktai;
