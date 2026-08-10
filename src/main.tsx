import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Project } from "./pages/projects";
import NotFound from "./pages/404";
import Root from "./root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "projects",
        Component: Project,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
