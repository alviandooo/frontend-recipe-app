import React from "react";
// import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import logo from "./logo.svg";
import "./styles/App.css";
import Home from "./pages/Home";
import Maintenance from "./pages/Maintenance";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  const isMaintenance = process.env.REACT_APP_IS_MAINTENANCE === "true";

  if (isMaintenance) {
    return <Maintenance />;
  } else {
    return <RouterProvider router={router} />;
  }
}

export default App;
