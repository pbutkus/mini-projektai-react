const KelionesPagrindinis = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="keliones-hero w-full bg-cover bg-center flex justify-center">
        <div className="container flex min-h-[85vh] items-center justify-center">
          <div className="flex gap-10 flex-col text-white">
            <div className="flex flex-col gap-3 text-center">
              <h1 className="text-7xl font-bold">Atrask Lietuvą iš naujo</h1>
              <p className="font-light text-4xl">Lankytinos vietos Lietuvoje</p>
            </div>
            <div className="text-center">
              <button className="bg-[#00D4E4] py-4 px-9 rounded-full">
                SUSISIEKITE SU MUMIS
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col py-44 px-6">
        <div className="flex gap-4">
          <img src="/keliones/ri_double-quotes-r.svg" alt="" />
          <p className="text-[#666666]">
            Lankytinos vietos dažnai palieka mums nuostabių ir džiaugsmingų
            prisiminimų. Aplink po visą Lietuvą galima pamatyti daugybe
            pažintinių takų, regioninių parkų. Lietuva dažnai pasižymi savo
            nuostabiais gamtos vietų takais, parkais, visgi tai nėra vienintelės
            vietos kur kiekvienas žmogus yra pilnai laukiamas. Nuo įspūdingų
            muziejų Kauno ar Vilniaus miestuose ar dar kuriame iš Lietuvos
            krašto miestų, iki jūros pakrančių, upių ir ežerų.
          </p>
        </div>
        <div className="relative">
          <div className="absolute right-0 bottom-0">
            <img src="/keliones/dekor/Lithuania.svg" alt="" />
          </div>
          <div className="relative p-16 bg-white mt-48 font-roboto max-w-[809px] shadow-lg">
            <div className="absolute rounded-2xl overflow-hidden shadow-lg -right-32">
              <img
                src="/keliones/uzutrakio_dvaras.png"
                alt="Uzutrakio dvaras"
                className="w-80 h-[450px] object-cover"
              />
            </div>
            <p className="uppercase text-[#A6A6A6] font-medium text-sm mb-24">
              YPATINGOS Lietuvos VIETOS
            </p>
            <div className="flex flex-col gap-5 mb-24">
              <h2 className="text-[#4B4B4B] text-2xl">Užutrakio dvaras</h2>
              <div className="flex gap-1">
                <img src="./keliones/pin.svg" alt="" />
                <p>TRAKAI</p>
              </div>
              <p className="text-[#888888] text-sm max-w-[486px]">
                Užutrakio dvaras - dvaras, stovintis prie Galvės ežero,
                Užutrakyje (Trakai). Kraštovaizdžio architektūros draustinis
                (nuo 1993 m.).
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <button className="uppercase text-[#00D4E4] text-sm font-bold border-2 border-[#00D4E4] rounded-full px-9 py-4">
                  daugiau apie objektą
                </button>
              </div>
              <div>
                <button className="flex gap-3 uppercase text-[#00D4E4] text-sm font-bold border-2 border-[#00D4E4] rounded-full px-9 py-4">
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 14 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.63468 7.10606H0.634687V7.10325C0.634687 3.53026 3.49975 0.634615 7 0.634615C10.5 0.634615 13.3653 3.53 13.3653 7.10769L13.3653 7.11051C13.3769 9.72644 11.7637 12.2397 10.0375 14.1598C9.1858 15.1073 8.33135 15.883 7.6893 16.4219C7.4126 16.6542 7.17625 16.8417 6.99777 16.9793C6.38267 16.5125 5.11289 15.4878 3.8642 14.089C2.17582 12.1975 0.623055 9.72942 0.63468 7.10606ZM2.86542 7.10769C2.86542 9.41251 4.70668 11.2962 7 11.2962C9.29333 11.2962 11.1346 9.41251 11.1346 7.10769C11.1346 4.80288 9.29333 2.91923 7 2.91923C4.70668 2.91923 2.86542 4.80288 2.86542 7.10769Z"
                      stroke="#00D4E4"
                      strokeWidth="1.26923"
                    />
                  </svg>

                  <span>žemėlapis</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-choose-us relative bg-center flex justify-center w-full">
        <div className="absolute top-0 left-0">
          <svg
            width="746"
            height="258"
            viewBox="0 0 746 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M562.946 0H746C674.004 57.5125 588.508 114.104 508.06 154.808C293.686 263.127 106.441 279.518 0 234.766V206.5C51.7883 231.183 139.555 227.486 255.212 197.829C360.026 170.727 526.6 95.6602 623.144 30.4202C641.498 18.112 634.863 20.3876 557.102 51.7296C293.801 158.023 93.3834 161.261 105.612 42.6353C106.647 32.6136 112.07 17.7372 120.491 0H156.23C96.8256 112.922 183.125 118.906 442.297 44.8906C466.812 38.0258 515.072 19.7151 562.946 0Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="container px-6">
          <div className="flex bg-white my-48 py-16 px-32">
            <div className="flex flex-col justify-center w-1/2 gap-11">
              <h2 className="text-[#333333] font-bold text-4xl max-w-[438px]">
                Mes dirbame tam kad jūs gerai praleistumėte laiką keliaudami
                aplink Lietuvą
              </h2>
              <p className="text-[#888888] max-w-[410px]">
                Tėvynė, kaip ir mylimoji - žmogui tik viena. - Jaroslav Hašek
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 w-1/2">
              <div className="flex flex-col">
                <p className="font-bold text-[#00D4E4] text-5xl mb-4">32</p>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-[#333333] text-lg">
                    Maršrutai pėsčiomis
                  </h3>
                  <p className="text-[#888888]">Naujoms patirtims</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-[#00D4E4] text-5xl mb-4">412</p>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-[#333333] text-lg">
                    komandos nariai
                  </h3>
                  <p className="text-[#888888]">Dirbantys prie šio projekto</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-[#00D4E4] text-5xl mb-4">5</p>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-[#333333] text-lg">
                    Nacionaliniai parkai
                  </h3>
                  <p className="text-[#888888] max-w-[216px]">
                    Kiekvienam entokultūriniam regionui
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-[#00D4E4] text-5xl mb-4">4,142</p>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-[#333333] text-lg">
                    Lankytinų objektų
                  </h3>
                  <p className="text-[#888888]">Po visą Lietuvą</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full relative">
        <div className="absolute right-0">
          <svg
            width="348"
            height="126"
            viewBox="0 0 348 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M98.643 7.62939e-06H0C38.7968 28.0875 84.8684 55.725 128.22 75.6038C243.74 128.504 344.642 136.509 402 114.653V99.2097C374.093 111.264 326.797 111.098 264.473 96.6141C207.991 83.3783 118.229 46.7178 66.2039 14.8564C56.3134 8.84541 59.8891 9.95675 101.792 25.2633C243.678 77.174 351.678 78.7555 345.088 20.8219C344.531 15.9276 341.608 8.66233 337.071 7.62939e-06H317.812C349.823 55.1482 303.319 58.0702 163.658 21.9233C150.447 18.5707 124.441 9.62833 98.643 7.62939e-06Z"
              fill="#00D4E4"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0">
          <svg
            width="402"
            height="126"
            viewBox="0 0 402 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M303.357 126H402C363.203 97.9125 317.132 70.275 273.78 50.3962C158.26 -2.50399 57.3584 -10.5086 0 11.347V26.7903C27.9074 14.7356 75.2028 14.902 137.527 29.3859C194.009 42.6217 283.771 79.2822 335.796 111.144C345.687 117.155 342.111 116.043 300.208 100.737C158.322 48.826 50.3219 47.2445 56.9116 105.178C57.4692 110.072 60.3918 117.338 64.9294 126H84.1881C52.1768 70.8518 98.6813 67.9298 238.342 104.077C251.553 107.429 277.559 116.372 303.357 126Z"
              fill="#00D4E4"
            />
          </svg>
        </div>
        <div className="container px-6">
          <h2 className="font-bold text-4xl py-20">
            Rekomenduojamos lankytinos vietos
          </h2>
          <div className="grid grid-cols-4 gap-16 pb-28">
            <div className="aspect-square relative">
              <img
                src="/keliones/uzutrakio_dvaras.png"
                alt=""
                className="object-cover w-full h-full"
              />
              <div className="absolute bg-[#2B2B2BB2] bottom-0 text-white w-full px-5 py-4">
                <p className="font-semibold capitalize">Užutrakio dvaras</p>
              </div>
            </div>
            <div className="aspect-square relative">
              <img
                src="/keliones/ventes_ragas.jpeg"
                alt=""
                className="object-cover w-full h-full"
              />
              <div className="absolute bg-[#2B2B2BB2] bottom-0 text-white w-full px-5 py-4">
                <p className="font-semibold capitalize">Ventės ragas</p>
              </div>
            </div>
            <div className="aspect-square relative">
              <img
                src="/keliones/velnio_akmuo.jpeg"
                alt=""
                className="object-cover w-full h-full"
              />
              <div className="absolute bg-[#2B2B2BB2] bottom-0 text-white w-full px-5 py-4">
                <p className="font-semibold capitalize">Velnio Akmuo</p>
              </div>
            </div>
            <div className="aspect-square relative">
              <img
                src="/keliones/gedimino_pilis.jpeg"
                alt=""
                className="object-cover w-full h-full"
              />
              <div className="absolute bg-[#2B2B2BB2] bottom-0 text-white w-full px-5 py-4">
                <p className="font-semibold capitalize">gedimino pilis</p>
              </div>
            </div>
            <div className="aspect-square relative">
              <img
                src="/keliones/kryziu_kalnas.jpeg"
                alt=""
                className="object-cover w-full h-full"
              />
              <div className="absolute bg-[#2B2B2BB2] bottom-0 text-white w-full px-5 py-4">
                <p className="font-semibold capitalize">Kryžių kalnas</p>
              </div>
            </div>
            <div className="aspect-square relative">
              <img
                src="/keliones/birstono_bokstas.jpeg"
                alt=""
                className="object-cover w-full h-full"
              />
              <div className="absolute bg-[#2B2B2BB2] bottom-0 text-white w-full px-5 py-4">
                <p className="font-semibold capitalize">
                  Birštono apžvalgos bokštas
                </p>
              </div>
            </div>
            <div className="aspect-square relative">
              <img
                src="/keliones/merkines_piramide.jpeg"
                alt=""
                className="object-cover w-full h-full"
              />
              <div className="absolute bg-[#2B2B2BB2] bottom-0 text-white w-full px-5 py-4">
                <p className="font-semibold capitalize">Merkinės piramidė</p>
              </div>
            </div>
            <div className="aspect-square relative">
              <img
                src="/keliones/kabantis_tiltas.jpeg"
                alt=""
                className="object-cover w-full h-full"
              />
              <div className="absolute bg-[#2B2B2BB2] bottom-0 text-white w-full px-5 py-4">
                <p className="font-semibold capitalize">Kabantis lynų tiltas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KelionesPagrindinis;
