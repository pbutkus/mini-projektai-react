import { Link } from "react-router-dom";
import { MdiFacebook } from "../icons/MdiFacebook";
import { MdiInstagram } from "../icons/MdiInstagram";
import { MdiLinkedin } from "../icons/MdiLinkedin";
import { MdiTwitter } from "../icons/MdiTwitter";

const KelionesFooter = () => {
  return (
    <footer className="flex flex-col items-center bg-[#11224D] text-white">
      <div className="container flex flex-col px-6">
        <div className="flex justify-between py-16">
          <div className="flex flex-col gap-11">
            <img src="/keliones/logo_footer.svg" alt="" />
            <div className="flex flex-col gap-4">
              <p className="font-bold">Sekite mus</p>
              <div>
                <ul className="flex gap-3">
                  <li>
                    <a
                      href="#"
                      className="inline-block border border-[#B8E4DA] rounded-full p-2"
                    >
                      <MdiFacebook className="w-6 h-6" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block border border-[#B8E4DA] rounded-full p-2"
                    >
                      <MdiTwitter className="w-6 h-6" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block border border-[#B8E4DA] rounded-full p-2"
                    >
                      <MdiLinkedin className="w-6 h-6" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block border border-[#B8E4DA] rounded-full p-2"
                    >
                      <MdiInstagram className="w-6 h-6" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex gap-32">
            <div className="grid gap-4">
              <h2 className="font-bold text-lg">Navigacija</h2>
              <ul className="text-[#DCF2ED] grid gap-4">
                <li>
                  <Link to={"/keliones"}>Pagrindinis</Link>
                </li>
                <li>
                  <Link to={"/keliones/apie-mus"}>Apie mus</Link>
                </li>
                <li>
                  <Link to={"/keliones/kontaktai"}>Kontaktai</Link>
                </li>
              </ul>
            </div>
            <div className="grid gap-4">
              <h2 className="font-bold text-lg">Kontaktai</h2>
              <ul className="text-[#DCF2ED] grid gap-4">
                <li>UAB "Keliauk kartu"</li>
                <li>Girininkų g. 58, Linkuva</li>
                <li>UAB "Keliauk kartu"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <p className="text-center text-[#DCF2ED] py-9 border-t border-[#DCF2ED]">
          Copyright 2022 Keliauk kartu
        </p>
      </div>
    </footer>
  );
};

export default KelionesFooter;
