import { useEffect, useState } from "react";
import OptionsCard from "../components/AutomobilioKonfiguratorius/OptionsCard";
import {
  Category,
  Option,
} from "../components/AutomobilioKonfiguratorius/types";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface CarOptions {
  [key: string]: Category;
}

interface Selections {
  [key: string]: Option | Option[];
}

const AutomobilioKonfiguratorius: React.FC = () => {
  const [carOptions] = useState<CarOptions>({
    pagrindinis_paketas: {
      title: "Pagrindinis paketas.",
      options: [
        { title: "Minimalus", price: 18000 },
        { title: "Bazinis", price: 20000 },
        { title: "Pilnas", price: 25000 },
      ],
      col_span: 1,
      type: "single",
    },
    spalva: {
      title: "Spalva.",
      options: [
        { title: "Juoda", price: 0, code: "#000000" },
        { title: "Raudona", price: 100, code: "#DC1313" },
        { title: "Pilka", price: 0, code: "#D9D9D9" },
        { title: "Žalia", price: 300, code: "#5A6B3A" },
        { title: "Balta", price: 0, code: "#FDFDFD" },
        { title: "Mėlyna", price: 200, code: "#124099" },
      ],
      col_span: 2,
      type: "single",
    },
    variklis: {
      title: "Variklis.",
      options: [
        { title: "Benzinas", price: 0 },
        { title: "Dyzelinas", price: 2000 },
        { title: "Elektra", price: 5000 },
      ],
      col_span: 1,
      type: "single",
    },
    salonas: {
      title: "Salonas.",
      options: [
        { title: "Medžiaginis", price: 0 },
        { title: "Odinis", price: 200 },
      ],
      col_span: 1,
      type: "single",
    },
    papildomi_priedai: {
      title: "Papildomi priedai.",
      options: [
        { title: "Stoglangis", price: 200 },
        { title: "Parktronikai", price: 300 },
        { title: "Galinė vaizdo kamera", price: 250 },
      ],
      col_span: 2,
      type: "multiple",
    },
  });
  const [selections, setSelections] = useState({
    pagrindinis_paketas: carOptions.pagrindinis_paketas.options[0],
    spalva: carOptions.spalva.options[0],
    variklis: carOptions.variklis.options[0],
    salonas: carOptions.salonas.options[0],
    papildomi_priedai: [],
  });
  const [price, setPrice] = useState<number>(0);
  const [isBought, setIsBought] = useState<boolean>(false);

  useEffect(() => {
    const newPrice = calculateTotalPrice(selections);
    setPrice(newPrice);
  }, [selections]);

  const calculateTotalPrice = (currentSelections: Selections) => {
    return Object.entries(currentSelections).reduce((total, [, selection]) => {
      if (Array.isArray(selection)) {
        return total + selection.reduce((sum, option) => sum + option.price, 0);
      }

      return total + selection.price;
    }, 0);
  };

  const handleSelectionChange = (
    category: string,
    newSelection: Option | Option[]
  ) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [category]: newSelection,
    }));
  };

  return (
    <div className="flex flex-col justify-center w-full font-inter bg-[#F5F5F5] text-[#222222] transition">
      <div className="flex relative w-full h-[265px]">
        <img
          src="./automobilio-konfiguratorius/header-image.jpeg"
          alt=""
          className="absolute w-full h-full object-cover z-10"
        />
        <div className="max-w-[1320px] w-full z-20 text-white mx-auto my-auto">
          <h1 className="flex flex-col gap-[11px]">
            <span className="text-8xl font-bold">Automobilio</span>
            <span className="font-semibold text-5xl">konfigūratorius</span>
          </h1>
        </div>
      </div>
      {!isBought ? (
        <div className="max-w-[1320px] w-full mx-auto grid grid-cols-3 gap-8 bg-white px-24 pt-24 pb-12 rounded-b-[20px] shadow-sm mb-2">
          <div className="col-span-2">
            <img
              src="./automobilio-konfiguratorius/automobilis.png"
              alt=""
              className="w-[709px] h-[398px] object-cover"
            />
          </div>
          <OptionsCard
            className="mt-[28px]"
            category={carOptions.pagrindinis_paketas as Category}
            handleSelectionChange={(newSelection) =>
              handleSelectionChange("pagrindinis_paketas", newSelection)
            }
            currentSelection={selections.pagrindinis_paketas}
          />
          <OptionsCard
            category={carOptions.spalva as Category}
            handleSelectionChange={(newSelection) =>
              handleSelectionChange("spalva", newSelection)
            }
            currentSelection={selections.spalva}
          />
          <OptionsCard
            category={carOptions.variklis as Category}
            handleSelectionChange={(newSelection) =>
              handleSelectionChange("variklis", newSelection)
            }
            currentSelection={selections.variklis}
          />
          <OptionsCard
            category={carOptions.salonas as Category}
            handleSelectionChange={(newSelection) =>
              handleSelectionChange("salonas", newSelection)
            }
            currentSelection={selections.salonas}
          />
          <OptionsCard
            category={carOptions.papildomi_priedai as Category}
            handleSelectionChange={(newSelection) =>
              handleSelectionChange("papildomi_priedai", newSelection)
            }
            currentSelection={selections.papildomi_priedai}
          />
          <div className="flex pt-9 border-t border-[#EDEDED] col-span-3 mt-2 items-center justify-between">
            <p className="text-[#222222] text-[24px]">
              <strong>Galutinė kaina:</strong>{" "}
              {new Intl.NumberFormat("lt-LT", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 0,
              }).format(price)}
            </p>
            <div>
              <button
                className="font-bold bg-[#2B9CEE] text-white px-8 py-4"
                onClick={() => setIsBought(true)}
              >
                Pirkti
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-[1320px] w-full h-[750px] mx-auto flex justify-center items-center bg-white rounded-b-[20px] mb-[65px]">
          <div className="flex flex-col gap-[25px] items-center">
            <DotLottieReact
              className="w-[185px] h-[185px]"
              src="https://lottie.host/6ea2c4e3-153f-4b73-bc6e-3d1099c5dd2b/z2Qlhg4dsv.json"
              autoplay
            />
            <div className="flex flex-col items-center gap-2 text-black">
              <h2 className="font-extrabold text-[36px]">Dėkojame!</h2>
              <p className="text-[18px]">
                Artimiausiu metu su jumis susisieks mūsų vadybininkas.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutomobilioKonfiguratorius;
