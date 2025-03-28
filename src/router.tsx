import { createBrowserRouter, Navigate } from "react-router-dom";
import { DefaultLayout } from "@layout/DefaultLayout";
import { FooterLayout } from "@layout/FooterLayout";
import { Main } from "@components/apply/Main";
import { LoginPage } from "@pages/LoginPage";
import { JoinMain } from "./pages/joinPage/JoinMain";
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
  {
    path: "/",
    element: <FooterLayout />,
    children: [
      { path: "join", element: <JoinMain /> },
    ],
  },
]);
