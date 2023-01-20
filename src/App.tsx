import { Routes, Route } from "react-router-dom";


//Pages
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
const App = () => {
  return (
    <>
        <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      <Route path="/destination/moon" element={<Destination />} />
        <Route path="/destination/mars" element={<Destination />} />
        <Route path="/destination/europa" element={<Destination />} />
        <Route path="/destination/titan" element={<Destination />} />
      </Routes>
    </>
  );
};

export default App;
