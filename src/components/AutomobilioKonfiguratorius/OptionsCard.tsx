import OptionCard from "./OptionCard";
import { Option, Category } from "./types";

type OptionsCardProps = {
  className?: string;
  category: Category;
  handleSelectionChange: (newSelection: Option | Option[]) => void;
  currentSelection: Option | Option[];
};

const OptionsCard: React.FC<OptionsCardProps> = ({
  className,
  category,
  handleSelectionChange,
  currentSelection,
}) => {
  const handleSingleSelect = (option: Option) => {
    handleSelectionChange(option);
  };

  const handleMultipleSelect = (option: Option) => {
    const currentArray = currentSelection as Option[];

    if (currentArray.some((opt) => opt.title === option.title)) {
      handleSelectionChange(
        currentArray.filter((opt) => opt.title !== option.title)
      );
    } else {
      handleSelectionChange([...currentArray, option]);
    }
  };

  return (
    <div
      className={`col-span-${
        category.col_span
      } flex flex-col rounded-2xl p-8 gap-2 shadow-md border ${
        className ? className : ""
      }`}
    >
      <h2 className="font-extrabold text-[24px]">{category.title}</h2>
      <div
        className={`grid ${
          category.options.length > 3 ? "grid-cols-2" : ""
        } gap-2`}
      >
        {category.options.map((option, i) => (
          <OptionCard
            key={i}
            type={category.type}
            title={option.title}
            price={option.price}
            active={
              category.type === "single"
                ? (currentSelection as Option).title === option.title
                : (currentSelection as Option[]).some(
                    (opt) => opt.title === option.title
                  )
            }
            code={option.code}
            select={() =>
              category.type === "single"
                ? handleSingleSelect(option)
                : handleMultipleSelect(option)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default OptionsCard;
