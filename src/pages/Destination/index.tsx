import { Link, useLocation } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import { Div, Nav } from "./destinationstyle";
import Europa from "./Europa";
import Mars from "./Mars";
import Moon from "./Moon";
import Titan from "./Titan";
export interface Lists {
  name: string;
  component: any;
  link: string;
  location: string;
  _id: number;
}
export interface DataProps {
  name: string;
  description: string;
  distance: string;
  travel: string;
  img: any;
}
const moon = require("../../assets/destination/image-moon.png");
const mars = require("../../assets/destination/image-mars.png");
const europa = require("../../assets/destination/image-europa.png");
const titan = require("../../assets/destination/image-titan.png");
export const lists: Lists[] = [

  {
    name: "Moon",
    link: "../destination/moon",
    location: "/destination/moon",
    _id: 1,

    component: (
      <Moon
        key={1}
        img={moon}
        name={"moon"}
        description={
          "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
        }
        distance={"384,400 km"}
        travel={"3 days"}
      />
    ),
  },
  {
    name: "Mars",
    link: "../destination/mars",
    location: "/destination/mars",
    _id: 2,

    component: (
      <Mars
        key={2}
        img={mars}
        name={"mars"}
        description={
          "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
        }
        distance={"225 mil. km"}
        travel={"9 months"}
      />
    ),
  },
  {
    name: "Europa",
    link: "../destination/europa",
    location: "/destination/europa",
    _id: 3,

    component: (
      <Europa
        key={3}
        img={europa}
        name={"europa"}
        description={
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
        }
        distance={"628 mil. km"}
        travel={"3 years"}
      />
    ),
  },
  {
    name: "Titan",
    link: "../destination/titan",
    location: "/destination/titan",
    _id: 4,

    component: (
      <Titan
        key={4}
        img={titan}
        name={"titan"}
        description={
          "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
        }
        distance={"1.6 bil. km"}
        travel={"7 years"}
      />
    ),
  },
];
const Destination = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <PageLayout>
      <Div>
        <Nav>
          <h2 className="title">
            <span>01</span> Pick Your Destination
          </h2>
          <ul>
            {lists.map((list) => {
              return (
                <li
                  key={list._id}
                  style={{
                    borderBottom: `${
                      list.location === location.pathname
                        ? "2px solid white"
                        : "inherit"
                    }`,
                  }}
                >
                  <Link onClick={() => console.log("linked")} to={list.link}>
                    {list.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Nav>
        {lists.map((list) => {
          return list.location === location.pathname ? list.component : null;
        })}
      </Div>
    </PageLayout>
  );
};
export default Destination;
