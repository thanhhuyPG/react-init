import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { publicRoutes, privatedRoutes } from "./routers";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import OtherLayout from "./layouts/OtherLayout";

const RequireAuth: FC<{ children: React.ReactElement }> = ({ children }) => {
  const isLogin = false;

  const navigate = useNavigate();
  if (!isLogin) {
    navigate("/login");
    return (
      <OtherLayout>
        <Login />
      </OtherLayout>
    );
  }
  return children;
};

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {publicRoutes.map((router, index) => {
            const Page = router.component;
            const Layout = router.layout || MainLayout;
            return (
              <Route
                path={router.path}
                key={index}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {privatedRoutes.map((router, index) => {
            const Page = router.component;
            const Layout = router.layout || MainLayout;
            return (
              <Route
                path={router.path}
                key={index}
                element={
                  <RequireAuth>
                    <Layout>
                      <Page />
                    </Layout>
                  </RequireAuth>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
