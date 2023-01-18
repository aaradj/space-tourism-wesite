//routes interface

interface IRoute {
  path: string;
  component: any;
  routeName: string;
  _id: string;
}

//routes

export const routes: IRoute[] = [
  {
    path: "home",
    component: "Home",
    routeName: "home",
    _id: "1",
  },
  {
    path: "destination",
    component: "Destination",
    routeName: "destination",
    _id: "2",
  },
  {
    path: "crew",
    component: "Crew" ,
    routeName: "crew",
    _id: "4",
  },
  {
    path: "technology",
    component: "Technology" ,
    routeName: "technology",
    _id: "5",
  },
];

export {};
