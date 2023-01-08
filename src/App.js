import React from "react";
// import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import logo from "./logo.svg";
import "./styles/App.css";
import Home from "./pages/recipes/Home";
import Maintenance from "./pages/Maintenance";
import Detail from "./pages/recipes/Detail";
import Login from "./pages/auth/Login";
import ErrorNotFound from "./pages/ErrorNotFound";
import AddRecipe from "./pages/recipes/Add";
import Profile from "./pages/profiles/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "add-recipe",
      element: <AddRecipe />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "detail/:id",
      element: <Detail />,
    },
    {
      path: "*",
      element: <ErrorNotFound />,
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
