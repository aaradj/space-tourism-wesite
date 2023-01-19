
import { Routes, Route } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import { routes } from "./routes";
const App = () => {
  return (
    <div>
      <PageLayout>
      <Routes>
      {routes.map((route) => {
        route.elemet.toUpperCase();
        return (
          <Route key={route._id} path={route.path} element={route.elemet} />
        )
        })}
        </Routes>
        </PageLayout>
    </div>
  );
};

export default App;
