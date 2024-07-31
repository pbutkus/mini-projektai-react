import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import FotoGalerija from "./pages/FotoGalerija.tsx";
import SandelioPlanai from "./pages/SandelioPlanai.tsx";
import PrekiuKrepselis from "./pages/PrekiuKrepselis.tsx";
import PiniguKonvertavimas from "./pages/PiniguKonvertavimas.tsx";
import AutomobilioKonfiguratorius from "./pages/AutomobilioKonfiguratorius.tsx";
import Keliones from "./pages/Keliones.tsx";
import KelionesPagrindinis from "./pages/Keliones/KelionesPagrindinis.tsx";
import KelionesApieMus from "./pages/Keliones/KelionesApieMus.tsx";
import KelionesKontaktai from "./pages/Keliones/KelionesKontaktai.tsx";
import Nenix from "./pages/Nenix.tsx";
import NenixPagrindinis from "./pages/Nenix/NenixPagrindinis.tsx";
import NenixApieMus from "./pages/Nenix/NenixApieMus.tsx";
import NenixPortfolio from "./pages/Nenix/NenixPortfolio.tsx";
import NenixKontaktai from "./pages/Nenix/NenixKontaktai.tsx";
import NenixProjektas from "./pages/Nenix/portfolio/NenixProjektas.tsx";
import NenixPortfolioWrapper from "./components/Nenix/NenixPortfolioWrapper.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/foto-galerija",
    element: <FotoGalerija />,
  },
  {
    path: "/sandelio-planai",
    element: <SandelioPlanai />,
  },
  {
    path: "/prekiu-krepselis",
    element: <PrekiuKrepselis />,
  },
  {
    path: "/pinigu-konvertavimas",
    element: <PiniguKonvertavimas />,
  },
  {
    path: "/automobilio-konfiguratorius",
    element: <AutomobilioKonfiguratorius />,
  },
  {
    path: "/keliones",
    element: <Keliones />,
    children: [
      {
        path: "/keliones/",
        element: <KelionesPagrindinis />,
      },
      {
        path: "/keliones/apie-mus",
        element: <KelionesApieMus />,
      },
      {
        path: "/keliones/kontaktai",
        element: <KelionesKontaktai />,
      },
    ],
  },
  {
    path: "/nenix",
    element: <Nenix />,
    children: [
      {
        index: true,
        element: <NenixPagrindinis />,
      },
      {
        path: "apie-mus",
        element: <NenixApieMus />,
      },
      {
        path: "portfolio",
        element: <NenixPortfolioWrapper />,
        children: [
          {
            index: true,
            element: <NenixPortfolio />,
          },
          {
            path: "projektas",
            element: <NenixProjektas />,
          },
        ],
      },
      {
        path: "kontaktai",
        element: <NenixKontaktai />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
