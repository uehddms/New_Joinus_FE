import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@layout/DefaultLayout";
import { FooterLayout } from "@layout/FooterLayout";
import { Main } from "@components/apply/Main";
import { LoginPage } from "@pages/LoginPage";
import { JoinMain } from "./pages/joinPage/JoinMain";
import { SignUpPage } from "./pages/SignUpPage";
import UsPage from "./pages/UsPage";
import { JoinStart } from "./pages/joinPage/JoinStart";
import RankPage from "@pages/ranking/RankPage";
import { JoinUpload } from "@pages/joinPage/JoinUpload";
import { JoinExplain } from "@pages/joinPage/JoinExplain";
import { JoinCate } from "@pages/joinPage/JoinCate";
import SharePage from "@pages/feedPage/SharePage";
import FeedDetailPage from "@pages/feedPage/FeedDetailPage";
import MyInfoEditPage from "@pages/myPage/MyInfoEditPage";
import MyThemePage from "@pages/myPage/MyThemePage";
import MyShoppinglistPage from "@pages/myPage/MyShoppinglistPage";
import MyContactPage from "@pages/myPage/MyContactPage";
import MyLogoutPage from "@pages/myPage/MyLogoutPage";
import MyQuitPage from "@pages/myPage/MyQuitPage";
import { JoinFrame } from "@pages/joinPage/JoinFrame";
import { JoinComplete } from "@components/join/JoinComplete";
import MyFeed from "@pages/feedPage/MyFeedPage";
import StoreFeedPage from "@pages/feedPage/StoreFeedPage";
import ChooseFeedPage from "@pages/feedPage/ChooseFeedPage";
import { JoinPost } from "@pages/joinPage/JoinPost";
import MarketPage from "@pages/marketPage/MarketPage";
import MarketDetailPage from "@pages/marketPage/MarketDetailPage";
import RankUserPage from "@pages/ranking/RankUserPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <Main /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "ex", element: <JoinExplain /> },
      { path: "feed/detail/:id", element: <FeedDetailPage /> },
      { path: "myEdit", element: <MyInfoEditPage /> },
      { path: "myTheme", element: <MyThemePage /> },
      { path: "myShopping", element: <MyShoppinglistPage /> },
      { path: "myContact", element: <MyContactPage /> },
      { path: "myLogout", element: <MyLogoutPage /> },
      { path: "myQuit", element: <MyQuitPage /> },
      { path: "feed/choose", element: <ChooseFeedPage /> },
      { path: "market", element: <MarketPage /> },
      { path: "market/detail/:id", element: <MarketDetailPage /> },
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
      { path: "rank/user/:id", element: <RankUserPage /> },
      { path: "upload", element: <JoinUpload /> },
      { path: "cate", element: <JoinCate /> },
      { path: "share", element: <SharePage /> },
      { path: "frame", element: <JoinFrame /> },
      { path: "complete", element: <JoinComplete /> },
      { path: "myFeed", element: <MyFeed /> },
      { path: "storeFeed", element: <StoreFeedPage /> },
      { path: "post", element: <JoinPost /> },
    ],
  },
]);
