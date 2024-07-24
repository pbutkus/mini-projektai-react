type OptionCardProps = {
  type: "single" | "multiple";
  active?: boolean;
  title: string;
  price: number;
  code?: string;
  select?: () => void;
};

const OptionCard: React.FC<OptionCardProps> = ({
  type,
  active,
  title,
  price,
  code,
  select,
}) => {
  if (type === "multiple") {
    return (
      <div
        className={`flex p-4 justify-between rounded-lg cursor-pointer ${
          active && "bg-[#189AF80D]"
        } border ${
          active ? "border-[#189AF8] border-2" : "border-[#D9D9D9]"
        } hover:bg-[#189AF80D] transition`}
        onClick={select}
      >
        <div className="flex flex-col gap-[8px]">
          <h3 className="font-semibold text-[20px] leading-none">{title}</h3>
          <p className="text-[18px] text-[#999999] leading-none">{price} €</p>
        </div>
        {active ? (
          <div>
            <img
              src="./automobilio-konfiguratorius/CheckSquareSelected.svg"
              alt=""
            />
          </div>
        ) : (
          <div>
            <img
              src="./automobilio-konfiguratorius/CheckSquareUnselected.svg"
              alt=""
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`flex p-4 justify-between rounded-lg cursor-pointer ${
        active && "bg-[#189AF80D]"
      } border ${
        active ? "border-[#189AF8] border-2" : "border-[#D9D9D9]"
      } hover:bg-[#189AF80D] transition`}
      onClick={select}
    >
      <div className="flex items-center gap-4">
        {code && (
          <div
            className={`w-[54px] h-[54px] border border-[#0000000D] rounded-full`}
            style={{ backgroundColor: code }}
          ></div>
        )}
        <div className="flex flex-col gap-[8px]">
          <h3 className="font-semibold text-[20px] leading-none">{title}</h3>
          <p className="text-[18px] text-[#999999] leading-none">
            {price >= 999 ? price / 1000 + " 000" : price} €
          </p>
        </div>
      </div>
      {active && (
        <div>
          <img src="./automobilio-konfiguratorius/CheckCircle.svg" alt="" />
        </div>
      )}
    </div>
  );
};

export default OptionCard;
