type ProductInfoProps = {
  title: string;
  price: number;
  amount: number;
  img_src: string;
  updateAmount: (amountChange: number) => void;
  removeFromCart: (title: string) => void;
};

const ProductInfo: React.FC<ProductInfoProps> = ({
  title,
  price,
  amount,
  img_src,
  updateAmount,
  removeFromCart,
}) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-6 py-2">
          <img
            src={`.${img_src}`}
            alt=""
            className="w-[160px] h-[120px] object-cover"
          />
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
      </td>
      <td className="text-left font-bold text-lg">{price.toFixed(2)} €</td>
      <td className="">
        <div className="flex gap-[5px] justify-between w-[150px] rounded-[10px] overflow-hidden bg-[#F3F3F3] mx-auto items-center">
          <button
            onClick={() => updateAmount(-1)}
            className="p-[13px] bg-[#EBEBEB] hover:bg-[#d4d4d4] transition"
          >
            <img src="/prekiu-krepselis/minus.svg" alt="" className="w-3 h-3" />
          </button>
          <span>{amount}</span>
          <button
            onClick={() => updateAmount(1)}
            className="p-[13px] bg-[#EBEBEB] hover:bg-[#d4d4d4] transition"
          >
            <img src="/prekiu-krepselis/plus.svg" alt="" className="w-3 h-3" />
          </button>
        </div>
      </td>
      <td className="text-left font-bold text-lg">
        {(price * amount).toFixed(2)} €
      </td>
      <td>
        <button
          onClick={() => removeFromCart(title)}
          className="hover:bg-[#F2F2F2] p-[10px] rounded-full transition"
        >
          <img
            src="/prekiu-krepselis/bx-trash.svg"
            alt=""
            className="w-6 h-6"
          />
        </button>
      </td>
    </tr>
  );
};

export default ProductInfo;
