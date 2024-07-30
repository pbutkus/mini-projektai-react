import KelionesPageHeader from "../../components/Keliones/KelionesPageHeader";

const KelionesKontaktai = () => {
  return (
    <>
      <KelionesPageHeader
        headline="kontaktai"
        imageUrl="/keliones/kontaktai_header.jpeg"
      />
      <div className="flex justify-center">
        <div className="container flex gap-10 px-6 my-14">
          <div className="flex flex-col w-7/12 gap-2">
            <div className="flex justify-evenly bg-[#FFFFFF4D] rounded-md pt-14 pb-8">
              <div>
                <h2 className="font-bold text-3xl text-[#262020]">Kontaktai</h2>
                <ul>
                  <li>
                    <p>- Telefono numeris: </p>
                    <p className="pl-1 text-[#00D4E4]">+370 61234567</p>
                  </li>
                  <li>
                    <p>- Elektroninis paštas: </p>
                    <p className="pl-1 text-[#00D4E4]">info@keliaukkartu.lt</p>
                  </li>
                  <li>
                    <p>- Įmonės adresas: </p>
                    <p className="pl-1 text-[#00D4E4] max-w-[183px]">
                      Girininkų g. 58, Linkuva, Pakruojo r., LT-45964, Lietuva
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold text-3xl text-[#262020]">
                  Rekvizitai
                </h2>
                <ul>
                  <li>
                    <p>- Įmonės pavadinimas: </p>
                    <p className="pl-1 text-[#00D4E4]">UAB "Keliauk kartu"</p>
                  </li>
                  <li>
                    <p>- Įmonės kodas: </p>
                    <p className="pl-1 text-[#00D4E4]">300000001</p>
                  </li>
                  <li>
                    <p>- PVM mokėtojo kodas: </p>
                    <p className="pl-1 text-[#00D4E4]">LT115252622541</p>
                  </li>
                </ul>
              </div>
            </div>
            <img
              src="/keliones/kontaktai_map.png"
              alt=""
              className="max-h-[320px] object-cover"
            />
          </div>
          <div className="bg-[#FFFFFF] px-12 py-14 rounded-md shadow-md w-5/12">
            <h2 className="text-[#292929] font-bold text-3xl mb-8">
              Parašykite mums
            </h2>
            <form>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="vardas" className="text-[#262020]">
                    Vardas
                  </label>
                  <input
                    type="text"
                    name="vardas"
                    id="vardas"
                    className="border rounded-md px-2 py-1"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="vardas" className="text-[#262020]">
                    Telefono Nr.
                  </label>
                  <input
                    type="text"
                    name="vardas"
                    id="vardas"
                    className="border rounded-md px-2 py-1"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="vardas" className="text-[#262020]">
                    El. paštas
                  </label>
                  <input
                    type="text"
                    name="elpastas"
                    id="elpastas"
                    className="border rounded-md px-2 py-1"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="vardas" className="text-[#262020]">
                    Žinutė
                  </label>
                  <textarea
                    name="zinute"
                    id="zinute"
                    className="border rounded-md px-2 py-1"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default KelionesKontaktai;
