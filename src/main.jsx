import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Main.jsx";
import PasswordGenerator from "./Projects/project01/PasswordGenerator.jsx";
import Bg_Change from "./Projects/project02/Bg_Change.jsx";
import CurrencyConverter from "./Projects/project03/CurrencyConverter.jsx";
import Project from "./pages/Project.jsx";
import Contects from "./pages/Contact.jsx";
import Gallary from "./pages/Gallary.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="projects" element={<Project />} />
      <Route path="Contacts" element={<Contects />} />
      <Route path="project01" element={<PasswordGenerator />} />
      <Route path="project02" element={<Bg_Change />} />
      <Route path="project03" element={<CurrencyConverter />} />
      <Route path="Gallary" element={<Gallary />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
