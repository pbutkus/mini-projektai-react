import { Link, useLocation } from "react-router-dom";

const KelionesNav = () => {
  const splitPathname = useLocation().pathname.split("/");
  const currentPage = splitPathname[splitPathname.length - 1];

  return (
    <nav className="flex justify-center shadow-lg py-6 bg-white">
      <div className="container flex justify-between items-center mx-6">
        <Link to="/keliones">
          <img src="/keliones/logo.svg" alt="" />
        </Link>
        <div>
          <ul className="flex text-[#1B6BED] gap-12 text-base font-semibold">
            <li
              className={`border-b ${
                currentPage === "keliones"
                  ? "border-[#1B6BED]"
                  : "border-transparent hover:border-[#1B6BED]"
              } `}
            >
              <Link to={"/keliones"}>Pagrindinis</Link>
            </li>
            <li
              className={`border-b ${
                currentPage === "apie-mus"
                  ? "border-[#1B6BED]"
                  : "border-transparent hover:border-[#1B6BED]"
              } `}
            >
              <Link to={"/keliones/apie-mus"}>Apie mus</Link>
            </li>
            <li
              className={`border-b ${
                currentPage === "kontaktai"
                  ? "border-[#1B6BED]"
                  : "border-transparent hover:border-[#1B6BED]"
              } `}
            >
              <Link to={"/keliones/kontaktai"}>Kontaktai</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default KelionesNav;
