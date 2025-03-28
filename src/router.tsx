import { createBrowserRouter, Navigate } from "react-router-dom";
import { DefaultLayout } from "@layout/DefaultLayout";
import { Main } from "@components/apply/Main";
import { LoginPage } from "@pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <Main /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignUpPage /> },
    ],
  },
]);
