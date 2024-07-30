import KelionesPageHeader from "../../components/Keliones/KelionesPageHeader";

const KelionesApieMus = () => {
  return (
    <>
      <KelionesPageHeader
        headline="apie mus"
        imageUrl="/keliones/apiemus.png"
      />
      <div className="flex justify-center">
        <div className="container flex px-6 py-14 gap-8">
          <div className="rounded-md bg-white px-14 py-20 w-3/5">
            <img src="/keliones/ri_double-quotes-r.svg" alt="" />
            <p className="text-[#333333]">
              Kelionių po Lietuvą portalą kuriame tam, kad kiekvienam iš jūsų
              padėtume atrasti naujas, įdomias vietas, geriau pažinti Lietuvą ir
              jos istoriją, pamatyti gražiausias vietas. Norime, kad kuo daugiau
              žmonių keliones po Lietuvą atrastų kaip įdomų laisvalaikio
              praleidimo būdą, jomis paįvairintų savo atostogas, savaitgalius ar
              net ilgesnius vasaros vakarus. Lankytinų vietų žemėlapyje
              tūkstančiai priežasčių keliauti. Portale sau įdomaus randa ir
              populiariausių, madingų vietų ieškotojai, ir ieškantys
              išskirtinių, dar neatrastų vietų. Kelionių maršrutai, patyrusių
              keliautojų pasakojimai ir jų rekomendacijos išsiruošti į kelionę
              padeda ir tiems, kurie neturi laiko ar noro kelionę planuoti
              savarankiškai.
            </p>
          </div>
          <div className="w-2/5">
            <img
              src="/keliones/apie_mus_post.jpeg"
              alt=""
              className="object-cover w-full max-h-[587px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default KelionesApieMus;
