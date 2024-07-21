type FooterProps = {
  total: number;
  updateTotal: () => void;
};

const Footer: React.FC<FooterProps> = ({ total, updateTotal }) => {
  return (
    <div className="w-full flex justify-between py-4">
      <button
        onClick={updateTotal}
        className="font-bold px-4 py-1 border-2 border-[#252525] rounded"
      >
        Atnaujinti
      </button>
      <div className="flex gap-4 text-[18px] font-bold">
        <span>Užsakymo suma:</span>
        <span>{total.toFixed(2)} €</span>
      </div>
    </div>
  );
};

export default Footer;
