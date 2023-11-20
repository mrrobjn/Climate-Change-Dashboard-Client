import { Route, Routes, useLocation } from "react-router-dom";
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
import React from "react";
import ReactLoading from "react-loading";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(resetCharts());
    dispatch(resetState());
    dispatch(resetSummary());
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location, dispatch]);
  return (
    <>
      <React.Suspense
        fallback={
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ReactLoading type="spin" color="#ccc" width={100} />
          </div>
        }
      >
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
          })}
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;
