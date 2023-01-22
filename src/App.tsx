import { Routes, Route } from "react-router-dom";
import { lists } from "./pages/Destination";

//Pages
import Crew, { crewList } from "./pages/Crew";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Technology, { technologyList } from "./pages/Technology";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {crewList.map((list) => {
          return <Route key={list._id} path={list.location} element={<Crew />} />;
        })}
        {technologyList.map((list) => {
          return <Route key={list._id} path={list.location} element={<Technology />} />;
        })}
        {lists.map((list) => {
          return (
            <Route
              key={list._id}
              path={list.location}
              element={<Destination />}
            />
          );
        })}
      </Routes>
    </>
  );
};

export default App;
