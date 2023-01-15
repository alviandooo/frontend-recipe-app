import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/recipes/Home";
import Maintenance from "./pages/Maintenance";
import Detail from "./pages/recipes/Detail";
import Login from "./pages/auth/Login";
import ErrorNotFound from "./pages/ErrorNotFound";
import AddRecipe from "./pages/recipes/Add";
import Profile from "./pages/profiles/Profile";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import VerificationResetPassword from "./pages/auth/VerificationResetPassword";

// import redux
import store, { persistor } from "./store/index";
import { Provider } from "react-redux";

//import redux-persist
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const isAuth = localStorage.getItem("isAuth") === "true";

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
      path: "register",
      element: <Register />,
    },
    {
      path: "reset-password",
      element: <ResetPassword />,
    },
    {
      path: "verify-reset-password",
      element: <VerificationResetPassword />,
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
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />;
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
