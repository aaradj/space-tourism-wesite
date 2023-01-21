import { Routes, Route } from "react-router-dom";
import { lists } from "./pages/Destination";

//Pages
import Crew, { crewList } from "./pages/Crew";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {
          crewList.map(list=>{
            return(
              <Route path={list.location} element={<Crew />} />
            )
          })
        }
        <Route path="/technology" element={<Technology />} />
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
