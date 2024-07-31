import { Link, useLocation } from "react-router-dom";
import NenixButton from "./NenixButton";
import NenixLogo from "./NenixLogo";
import { useEffect, useState } from "react";

const NenixNav = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isIndex, setIsIndex] = useState<boolean>(false);

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (pathname.endsWith("nenix")) {
      setIsIndex(true);
    } else {
      setIsIndex(false);
      setScrolled(true);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    handleScroll();

    if (pathname.endsWith("nenix")) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    } else {
      setScrolled(true);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, isIndex, scrolled]);

  return (
    <nav
      className={`${
        scrolled ? "bg-white" : "bg-transparent"
      } py-[7px] fixed z-50 w-full transition`}
    >
      <div className="flex justify-center">
        <div className="container px-6">
          <div className="flex justify-between">
            <div>
              <NenixLogo
                type={scrolled ? "dark" : "light"}
                className="w-[134px]"
              />
            </div>
            <ul
              className={`flex items-center ${
                scrolled ? "text-[#0C1A3AE5]" : "text-[#FBFBFB]"
              } gap-[1.875rem] text-xl`}
            >
              <li
                className={
                  pathname.endsWith("nenix") ? "text-[#FF6600] font-medium" : ""
                }
              >
                <Link to={"/nenix"}>Pradinis</Link>
              </li>
              <li
                className={
                  pathname.endsWith("apie-mus")
                    ? "text-[#FF6600] font-medium"
                    : ""
                }
              >
                <Link to={"/nenix/apie-mus"}>Apie mus</Link>
              </li>
              <li
                className={
                  pathname.includes("portfolio")
                    ? "text-[#FF6600] font-medium"
                    : ""
                }
              >
                <Link to={"/nenix/portfolio"}>Portfelis</Link>
              </li>
              <li
                className={
                  pathname.endsWith("kontaktai")
                    ? "text-[#FF6600] font-medium"
                    : ""
                }
              >
                <Link to={"/nenix/kontaktai"}>Kontaktai</Link>
              </li>
              <li>
                <NenixButton color={scrolled ? "blue" : "white"}>
                  Susisiekite
                </NenixButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NenixNav;
