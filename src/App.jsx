import {  Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import { publicRoutes, privateRoutes } from "./routes";
import { DefaultLayout, AdminLayout } from "./layouts/";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetCharts } from "./redux/slides/VisualizeFormSlice";
import { resetState } from "./redux/slides/ClimateDataFormSlice";
import { resetSummary } from "./redux/slides/DataSummarySlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(resetCharts());
    dispatch(resetState());
    dispatch(resetSummary());
  }, [location, dispatch]);
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
          })
        }
      </Routes>
    </div>
  );
}

export default App;
