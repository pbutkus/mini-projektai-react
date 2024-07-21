const AntrasAukstas = () => {
  return (
    <div className="flex gap-6">
      <table className="border-collapse w-[648px] h-fit">
        <thead className="border-[#333333] border-t-2 border-b-2">
          <tr className="text-left">
            <th className="py-3 px-10">Sandėlio zona</th>
            <th className="py-3 px-10">
              Socialinės patalpos antresolėse, kv. m
            </th>
            <th className="py-3 px-10">Rezervinis plotas antresolėse, kv. m</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#999999]">
            <td className="py-3 px-10">B</td>
            <td className="py-3 px-10">92,92</td>
            <td className="py-3 px-10">578,50</td>
          </tr>
          <tr className="border-b border-[#999999]">
            <td className="py-3 px-10">C</td>
            <td className="py-3 px-10">151,04</td>
            <td className="py-3 px-10">390,46</td>
          </tr>
          <tr className="border-b border-[#999999]">
            <td className="py-3 px-10">D</td>
            <td className="py-3 px-10">151,78</td>
            <td className="py-3 px-10">390,46</td>
          </tr>
        </tbody>
      </table>
      <img
        src="/sandeliai/antras.png"
        alt="Antras sandelis"
        className="w-[648px]"
      />
    </div>
  );
};

export default AntrasAukstas;
