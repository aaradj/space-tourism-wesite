import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Moon from "./pages/Destination/Moon";
import Home from "./pages/Home";
import Technology from "./pages/Technology";

interface IRoute {
  path: string;
  elemet: any;
  _id: number;
  authorize?: "admin" | "guest";
}

export const routes: IRoute[] = [
  {
    path: "/home",
    elemet: <Home/>,
    _id: 1,
  },
  {
    path: "/destination/moon",
    elemet: <Destination />,
    _id: 2,
  },
  {
    path: "/crew",
    elemet: <Crew />,
    _id: 3,
  },
  {
    path: "/technology",
    elemet: <Technology/>,
    _id: 4,
  },
];

export {};
