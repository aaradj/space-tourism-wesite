interface IRoute {
  path: string;
  elemet: string;
  _id: number;
  authorize?: "admin" | "guest";
}

export const routes:IRoute[] = [
  {
    path: "/",
    elemet: "Home",
    _id: 1,
  },
  {
    path: "/destination",
    elemet: "Destination",
    _id: 2,
  },
  {
    path: "/crew",
    elemet: "Crew",
    _id: 3,
  },
  {
    path: "/technology",
    elemet: "Technology",
    _id: 4,
  },
];

export {};
