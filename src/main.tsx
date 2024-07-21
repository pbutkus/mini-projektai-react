import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import FotoGalerija from "./pages/FotoGalerija.tsx";
import SandelioPlanai from "./pages/SandelioPlanai.tsx";
import PrekiuKrepselis from "./pages/PrekiuKrepselis.tsx";

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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
