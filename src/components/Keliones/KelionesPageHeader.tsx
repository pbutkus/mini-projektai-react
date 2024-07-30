type KelionesPageHeaderProps = {
  headline: string;
  imageUrl: string;
};

const KelionesPageHeader: React.FC<KelionesPageHeaderProps> = ({
  headline,
  imageUrl,
}) => {
  return (
    <div className="flex justify-center relative h-[290px]">
      <div className="container flex items-center px-6 z-20">
        <h1 className="uppercase text-white text-4xl font-bold">{headline}</h1>
      </div>
      <img
        src={imageUrl}
        alt={headline}
        className="absolute h-full w-screen object-cover"
      />
    </div>
  );
};

export default KelionesPageHeader;
