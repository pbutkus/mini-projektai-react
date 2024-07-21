import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ProductInfo from "./ProductInfo";

const produktai = [
  {
    id: 1,
    title: "Sim kortelė",
    price: 2.0,
    amount: 1,
    img_src: "/prekiu-krepselis/sim.png",
  },
  {
    id: 2,
    title: "Telefonas",
    price: 1200.0,
    amount: 1,
    img_src: "/prekiu-krepselis/telefonas.png",
  },
  {
    id: 3,
    title: "SD kortelė (128 GB)",
    price: 35.0,
    amount: 2,
    img_src: "/prekiu-krepselis/sd.jpeg",
  },
];

const Krepselis = () => {
  const [products, setProducts] = useState(produktai);
  const [total, setTotal] = useState<number>(
    produktai.reduce((a, b) => a + b.price * b.amount, 0)
  );

  const removeFromCartHandler = (title: string) => {
    console.log("deleting");
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.title !== title)
    );
  };

  const productAmountUpdateHandler = (title: string, amountChange: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.title === title) {
          const newAmount = Math.max(0, product.amount + amountChange);
          return { ...product, amount: newAmount };
        }
        return product;
      })
    );
  };

  const totalUpdateHandler = () => {
    setTotal(products.reduce((a, b) => a + b.price * b.amount, 0));
  };

  return (
    <div className="bg-white rounded-lg px-12 pt-12 pb-8">
      <table className="w-full">
        <Header />
        <tbody className="divide-y divide-[#00000026]">
          {products.map((produktas) => (
            <ProductInfo
              key={produktas.id}
              title={produktas.title}
              price={produktas.price}
              amount={produktas.amount}
              img_src={produktas.img_src}
              updateAmount={(amountChange: number) =>
                productAmountUpdateHandler(produktas.title, amountChange)
              }
              removeFromCart={() => removeFromCartHandler(produktas.title)}
            />
          ))}
        </tbody>
      </table>
      <div className="w-full h-[2px] my-4 bg-[#D9D9D9]"></div>
      <Footer total={total} updateTotal={totalUpdateHandler} />
    </div>
  );
};

export default Krepselis;
