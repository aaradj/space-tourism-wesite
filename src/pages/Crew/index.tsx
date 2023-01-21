import { Link, useLocation } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import Anousheh from "./Anousheh";
import { Div } from "./crewstyle";
import Douglas from "./Douglas";
import Mark from "./Mark";
import Victor from "./Victor";
const anoush = require("../../assets/crew/image-anousheh-ansari.png");
const douglas = require("../../assets/crew/image-douglas-hurley.png");
const victor = require("../../assets/crew/image-victor-glover.png");
const mark = require("../../assets/crew/image-mark-shuttleworth.png");
export interface CrewData {
  name: string;
  image: any;
  role: string;
  bio: string;
  _id: number;
}

interface CrewList {
  name: string;
  location: string;
  link: string;
  component: any;
  _id: number;
}

const douglasData: CrewData = {
  name: "Douglas Hurley",
  image: douglas,
  role: "Commander",
  bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  _id: 1,
};

const MarkData: CrewData = {
  name: "Mark Shuttleworth",
  image: mark,
  role: "Mission Specialist",
  bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  _id: 2,
};

const AnoushehData: CrewData = {
  name: "Anousheh Ansari",
  image: anoush,
  role: "Flight Engineer",
  bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  _id: 4,
};

const VictorData: CrewData = {
  name: "Victor Glover",
  image: victor,
  role: "Pilot",
  bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  _id: 3,
};

export const crewList: CrewList[] = [
  {
    name: "Douglas",
    location: "/crew/douglas",
    link: "../crew/douglas",
    component: <Douglas data={douglasData} />,
    _id: 1,
  },
  {
    name: "Mark",
    location: "/crew/mark",
    link: "../crew/mark",
    component: <Mark data={MarkData} />,
    _id: 2,
  },
  {
    name: "Victor",
    location: "/crew/victor",
    link: "../crew/victor",
    component: <Victor data={VictorData} />,
    _id: 3,
  },
  {
    name: "Anousheh",
    location: "/crew/anousheh",
    link: "../crew/anousheh",
    component: <Anousheh data={AnoushehData} />,
    _id: 4,
  },
];

const Crew = () => {
  const location = useLocation();
  return (
    <PageLayout>
      <Div>
        {crewList.map((list) => {
          return list.location === location.pathname ? list.component : null;
        })}
        {crewList.map((list) => {
          return (
            <ul key={list._id}>
              <li>
                <Link to={list.link}>{list.name}</Link>
              </li>
            </ul>
          );
        })}
      </Div>
    </PageLayout>
  );
};

export default Crew;
