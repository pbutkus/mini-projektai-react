import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className="container flex flex-col justify-center items-center gap-12 my-12 mx-4">
          <h1 className="font-bold text-4xl">MINI PROJEKTAI</h1>
          <div className="grid grid-cols-4 gap-6">
            <Link
              to="/foto-galerija"
              className="flex flex-col border border-neutral-200 shadow-md group"
            >
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src="/thumbnails/foto-galerija.png"
                  alt="Foto Galerija"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4">
                <h2 className="font-semibold">Foto Galerija</h2>
              </div>
            </Link>
            <Link
              to="/sandelio-planai"
              className="flex flex-col border border-neutral-200 shadow-md group"
            >
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src="/thumbnails/sandeliai.png"
                  alt="Sandelio planai/tabai"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4">
                <h2 className="font-semibold">Sandelio planai/tabai</h2>
              </div>
            </Link>
            <Link
              to="/prekiu-krepselis"
              className="flex flex-col border border-neutral-200 shadow-md group"
            >
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src="/thumbnails/prekiu-krepselis.png"
                  alt="Prekių krepšelis"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4">
                <h2 className="font-semibold">Prekių krepšelis</h2>
              </div>
            </Link>
            <Link
              to="/pinigu-konvertavimas"
              className="flex flex-col border border-neutral-200 shadow-md group"
            >
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src="/thumbnails/pinigu-konvertavimas.jpg"
                  alt="Pinigų konvertavimas"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4">
                <h2 className="font-semibold">Pinigų konvertavimas</h2>
              </div>
            </Link>
            <Link
              to="/automobilio-konfiguratorius"
              className="flex flex-col border border-neutral-200 shadow-md group"
            >
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src="/thumbnails/automobilio-konfiguratorius.png"
                  alt="Automobilio konfigūratorius"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4">
                <h2 className="font-semibold">Automobilio konfigūratorius</h2>
              </div>
            </Link>
            <Link
              to="/keliones"
              className="flex flex-col border border-neutral-200 shadow-md group"
            >
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src="/thumbnails/keliones.png"
                  alt="Kelionės"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4">
                <h2 className="font-semibold">Kelionės</h2>
              </div>
            </Link>
            <Link
              to="/nenix"
              className="flex flex-col border border-neutral-200 shadow-md group"
            >
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src="/thumbnails/nenix.png"
                  alt="Nenix"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4">
                <h2 className="font-semibold">Nenix</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
