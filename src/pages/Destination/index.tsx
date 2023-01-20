import { Link, useLocation } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import { Div } from "./destinationstyle";
import Europa from "./Europa";
import Mars from "./Mars";
import Moon from "./Moon";
import Titan from "./Titan";
interface Lists {
  component: any;
  path: string;
  location: string;
  name: string;
  _id: number;
}

const lists: Lists[] = [
  {
    component: <Moon key={1} />,
    path: "../destination/moon",
    name: "moon",
    location: "/destination/moon",
    _id: 1,
  },
  {
    component: <Mars key={2} />,
    path: "../destination/mars",
    name: "mars",
    location: "/destination/mars",
    _id: 2,
  },
  {
    component: <Europa key={3} />,
    path: "../destination/europa",
    name: "europa",
    location: "/destination/europa",
    _id: 3,
  },
  {
    component: <Titan key={4} />,
    path: "../destination/titan",
    name: "titan",
    location: "/destination/titan",
    _id: 4,
  },
];

const Destination = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <PageLayout>
      <Div>
        <ul>
          {lists.map((list) => {
            return (
              <li key={list._id}>
                <Link to={list.path}>{list.name}</Link>
              </li>
            );
          })}
        </ul>
        {lists.map((list) => {
          return list.location === location.pathname ? list.component : null;
        })}
      </Div>
    </PageLayout>
  );
};

export default Destination;
