import { FC } from "react";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Login from "../pages/Login";
import OtherLayout from "../layouts/OtherLayout";
import Payment from "../pages/Payment";

interface RouterType {
  path: string;
  component: FC;
  layout?: FC<{ children: string | JSX.Element | JSX.Element[] | JSX.Element }>;
}

const publicRoutes: RouterType[] = [
  {
    path: "/",
    component: Home,
    layout: MainLayout,
  },
  {
    path: "/about",
    component: About,
    layout: MainLayout,
  },
  {
    path: "/login",
    component: Login,
    layout: OtherLayout,
  },
];

const privatedRoutes: RouterType[] = [
  {
    path: "/payment",
    component: Payment,
    layout: MainLayout,
  },
];

export { publicRoutes, privatedRoutes };
