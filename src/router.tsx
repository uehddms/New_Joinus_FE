import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@layout/DefaultLayout";
import { FooterLayout } from "@layout/FooterLayout";
import { Main } from "@components/apply/Main";
import { LoginPage } from "@pages/LoginPage";
import { JoinMain } from "./pages/joinPage/JoinMain";
import { SignUpPage } from "./pages/SignUpPage";
import UsPage from "./pages/UsPage";
import { JoinStart } from "./pages/joinPage/JoinStart";
import RankPage from "@pages/RankPage";
import { JoinUpload } from "@pages/joinPage/JoinUpload";
import { JoinExplain } from "@pages/joinPage/JoinExplain";
import { JoinCate } from "@pages/joinPage/JoinCate";
import SharePage from "@pages/SharePage";
import FeedDetailPage from "@pages/FeedDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <Main /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "ex", element: <JoinExplain /> },
      { path: "feed/detail/1", element: <FeedDetailPage /> },
    ],
  },
  {
    path: "/",
    element: <FooterLayout />,
    children: [
      { path: "join", element: <JoinMain /> },
      { path: "start", element: <JoinStart /> },
      { path: "us", element: <UsPage /> },
      { path: "rank", element: <RankPage /> },
      { path: "upload", element: <JoinUpload /> },
      { path: "cate", element: <JoinCate /> },
      { path: "share", element: <SharePage /> },
    ],
  },
]);
