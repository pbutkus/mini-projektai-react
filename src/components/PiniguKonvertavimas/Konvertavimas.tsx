import { useRef, useState } from "react";
import Dropdown from "./Dropdown";
import isoCurrencies from "./isoCurrencies";

type Currency = {
  value: string;
  name: string;
  country: string;
};

const Konvertavimas = () => {
  const currencies: Currency[] = isoCurrencies;
  const mappedCurrencies = currencies.map((currency) => {
    return { value: currency.value, title: currency.value };
  });
  const mappedCurrencies2 = currencies.map((currency) => {
    return { value: currency.value, title: currency.name };
  });

  const [currencyFrom, setCurrencyFrom] = useState(mappedCurrencies[0].value);
  const [currencyTo, setCurrencyTo] = useState(mappedCurrencies2[0].value);
  const [converted, setConverted] = useState<number>();
  const [convertedInit, setConvertedInit] = useState<number>();
  const [convertedFrom, setConvertedFrom] = useState<string>("");
  const [convertedTo, setConvertedTo] = useState<string>("");
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const fromInputRef = useRef<HTMLInputElement>(null);

  const handleFromChange = (curr: string) => {
    setCurrencyFrom(curr);
  };

  const handleToChange = (curr: string) => {
    setCurrencyTo(curr);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    fetch(`https://open.er-api.com/v6/latest/${currencyFrom}`)
      .then((data) => data.json())
      .then((json) => {
        const rateValue = json.rates[currencyTo];
        setRate(rateValue);
        const value = fromInputRef.current?.valueAsNumber;
        const conversionValue = value! * rateValue;
        setConverted(conversionValue);
        setConvertedInit(value);

        setConvertedFrom(currencyFrom);
        setConvertedTo(currencyTo);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col">
      <img
        src="./pinigu-konvertavimas/logo.svg"
        alt=""
        className="w-[527px] mb-[57px]"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 w-[527px] mb-[42px]"
      >
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 w-[392px]">
            <label
              htmlFor="turima-suma"
              className="font-pt-sans text-white font-bold text-lg"
            >
              Turima suma
            </label>
            <input
              type="number"
              name="turima-suma"
              id="turima-suma"
              placeholder="1.0"
              className="appearance-none rounded-lg px-4 py-[14px] bg-[#191919] text-lg text-[#D4D4D4]"
              ref={fromInputRef}
              required
            />
            <span className="text-[#949494] text-[14px]">
              Įveskite savo turimą pinigų sumą ir pasirinkite valiutą.
            </span>
          </div>
          <div className="flex items-center pt-2">
            <Dropdown
              options={mappedCurrencies}
              changeHandler={(option: string) => handleFromChange(option)}
            />
          </div>
        </div>
        <div className="flex flex-col w-[392px] gap-2">
          <label
            htmlFor="norima-valiuta"
            className="font-pt-sans text-white text-lg font-bold"
          >
            Norima valiuta
          </label>
          <Dropdown
            options={mappedCurrencies2}
            changeHandler={(option: string) => handleToChange(option)}
          />
          <span className="text-[#949494] text-[14px]">
            Pasirinkite į kokią valiutą norite keisti turimą sumą.
          </span>
        </div>
        <div>
          <button
            type="submit"
            className="flex justify-center items-center rounded-lg bg-white hover:bg-white/90 py-4 px-2 w-[256px] font-bold text-lg"
          >
            {loading ? (
              <img
                src="./pinigu-konvertavimas/progress-animation.svg"
                alt=""
                className="w-6 h-6 animate-spin"
              />
            ) : (
              "Konvertuoti"
            )}
          </button>
        </div>
      </form>
      <div className="min-h-[86px]">
        {rate && (
          <div className="text-white">
            <div className="font-pt-sans font-bold text-[40px]">
              <span className="z-10 relative inline-block after:-z-10 after:absolute after:w-full after:h-[13px] after:bottom-2 after:left-2 after:bg-[#F8918B]">
                {convertedInit} {convertedFrom}
              </span>{" "}
              yra{" "}
              <span className="z-10 relative inline-block after:-z-10 after:absolute after:w-full after:h-[13px] after:bottom-2 after:left-2 after:bg-[#F8918B]">
                {converted!.toFixed(2)} {convertedTo}
              </span>
            </div>
            <p className="font-pt-sans text-lg">
              <strong>Santykis:</strong> 1 {convertedFrom} = {rate}{" "}
              {convertedTo}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Konvertavimas;
