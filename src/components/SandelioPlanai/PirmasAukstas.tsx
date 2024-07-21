const PirmasAukstas = () => {
  return (
    <div className="flex gap-6">
      <table className="border-collapse w-[648px] h-fit">
        <thead className="border-[#333333] border-t-2 border-b-2">
          <tr className="text-left">
            <th className="py-3 px-10">Sandėlio zona</th>
            <th className="py-3 px-10">Sandėlio plotas, kv. m</th>
            <th className="py-3 px-10">Rampos</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#999999]">
            <td className="py-3 px-10">B</td>
            <td className="py-3 px-10">6 963,29</td>
            <td className="py-3 px-10">5 rampos</td>
          </tr>
          <tr className="border-b border-[#999999]">
            <td className="py-3 px-10">C</td>
            <td className="py-3 px-10">3 371,05</td>
            <td className="py-3 px-10">5 rampos</td>
          </tr>
          <tr className="border-b border-[#999999]">
            <td className="py-3 px-10">D</td>
            <td className="py-3 px-10">3 300,79</td>
            <td className="py-3 px-10">5 rampos bei 1 šoninė</td>
          </tr>
          <tr className="border-b border-[#999999]">
            <td className="py-3 px-10">E</td>
            <td colSpan={1} className="py-3 px-10">
              17,24 (bendrosios buitinės patalpos)
            </td>
            <td className="py-3 px-10"></td>
          </tr>
        </tbody>
      </table>
      <img
        src="/sandeliai/pirmas.png"
        alt="Pirmas sandelis"
        className="w-[648px]"
      />
    </div>
  );
};

export default PirmasAukstas;
