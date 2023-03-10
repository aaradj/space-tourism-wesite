import { Link, useLocation } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import { Div, Main, TextTitle } from "./technology";
interface TechLists {
  name: string;
  image: any;
  description: string;
  location:
    | "/technology/lounch"
    | "/technology/spaceport"
    | "/technology/spacecapsule";
  link:
    | "../technology/lounch"
    | "../technology/spaceport"
    | "../technology/spacecapsule";
  readonly _id: number;
}

const lounch = require("../../assets/technology/image-launch-vehicle-portrait.jpg");
const spaceCapsule = require("../../assets/technology/image-space-capsule-portrait.jpg");
const spacePort = require("../../assets/technology/image-spaceport-portrait.jpg");

export const technologyList: TechLists[] = [
  {
    name: "Launch vehicle",
    image: lounch,
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    location: "/technology/lounch",
    link: "../technology/lounch",
    _id: 1,
  },
  {
    name: "Spaceport",
    image: spacePort,
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    location: "/technology/spaceport",
    link: "../technology/spaceport",
    _id: 2,
  },
  {
    name: "Space capsule",
    image: spaceCapsule,
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    location: "/technology/spacecapsule",
    link: "../technology/spacecapsule",
    _id: 3,
  },
];

const Technology = () => {
  const location = useLocation();
  return (
    <PageLayout>
      <Div>
        <TextTitle>
          <p>
            <span>03</span>SPACE LOUNCH 101
          </p>
        </TextTitle>
        <Main>
          <ul>
            {technologyList.map((list) => {
              return (
                <li
                  key={list._id}
                  style={{
                    background: `${
                      list.location === location.pathname ? "white" : "inherit"
                    }`,
                  }}
                >
                  <Link
                    style={{
                      color: `${
                        list.location === location.pathname
                          ? "black"
                          : "inherit"
                      }`,
                    }}
                    to={list.link}
                  >
                    {list._id}
                  </Link>
                </li>
              );
            })}
          </ul>
          {technologyList.map((list) => {
            return list.location === location.pathname ? (
              <div className="container">
                <div className="text">
                  <div className="title">
                    <p>the technology</p>
                    <h3>{list.name}</h3>
                  </div>
                  <div className="description">
                    <p>{list.description}</p>
                  </div>
                </div>
                <div className="image">
                  <img loading="lazy" src={list.image} alt={list.name} />
                </div>
              </div>
            ) : null;
          })}
        </Main>
      </Div>
    </PageLayout>
  );
};
export default Technology;
