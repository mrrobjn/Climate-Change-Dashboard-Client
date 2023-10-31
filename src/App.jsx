import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { publicRoutes, privateRoutes } from "./routes";
import { DefaultLayout, AdminLayout } from "./layouts/";
function App() {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Layout = route.layout || DefaultLayout;
        const Page = route.component;
        return (
          <Route
            path={route.path}
            key={index}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          >
            {route.children?.map((childRoute, i) => {
              return (
                <Route
                  path={childRoute.path}
                  element={<childRoute.component />}
                  key={i}
                />
              );
            })}
          </Route>
        );
      })}
      {privateRoutes.map((route, index) => {
        const Layout = route.layout || AdminLayout;
        const Page = route.component;
        return (
          <Route
            path={route.path}
            key={index}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          >
            {route.children?.map((childRoute, i) => {
              return (
                <Route
                  path={childRoute.path}
                  element={<childRoute.component />}
                  key={i}
                />
              );
            })}
          </Route>
        );
      })}
    </Routes>
  );
}

export default App;
