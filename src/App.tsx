import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              element={route.component}
              key={route._id}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
