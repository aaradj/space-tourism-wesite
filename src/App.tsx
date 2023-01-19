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
        <Route path="/" element={<Home/>} />
        <Route path="/destination" element={<Destination/>} />
        <Route path="/crew" element={<Crew/>} />
        <Route path="/technology" element={<Technology/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </>
  );
};

export default App;
