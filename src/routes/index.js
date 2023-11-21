import React from "react";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const DataAccessPage = React.lazy(() => import("../pages/DataAccessPage"));
const ArticlesPage = React.lazy(() => import("../pages/ArticlesPage"));
const AirQualityPage = React.lazy(() =>
  import("../pages/NestedPage/AirQualityPage")
);
const WeatherForcastPage = React.lazy(() =>
  import("../pages/NestedPage/WeatherForcastPage")
);
const HistoricalWeatherPage = React.lazy(() =>
  import("../pages/NestedPage/HistoricalWeatherPage")
);
const SingleArticlePage = React.lazy(() =>
  import("../pages/SingleArticlePage")
);
const NoneFooterLayout = React.lazy(() =>
  import("./../layouts/NoneFooterLayout/index")
);
const CreateArticlePage = React.lazy(() =>
  import("../pages/admin/NestedPage/CreateArticlePage")
);
const AdminArticles = React.lazy(() =>
  import("../pages/admin/AdminArticlesPage")
);
const AdminUsersPage = React.lazy(() =>
  import("../pages/admin/AdminUsersPage")
);
const EditArticlePage = React.lazy(() =>
  import("../pages/admin/NestedPage/EditArticlePage")
);
const ArticlesListPage = React.lazy(() =>
  import("../pages/admin/NestedPage/ArticlesListPage")
);
const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const RegisterPage = React.lazy(() => import("../pages/RegisterPage"));
const UserListPage = React.lazy(() =>
  import("../pages/admin/NestedPage/UserListPage")
);

const publicRoutes = [
  { path: "/", component: HomePage },
  {
    path: "/data",
    component: DataAccessPage,
    children: [
      { path: "forecast", component: WeatherForcastPage },
      { path: "historical", component: HistoricalWeatherPage },
      { path: "air-quality", component: AirQualityPage },
    ],
  },
  {
    path: "/articles_list",
    component: ArticlesPage,
  },
  { path: "/create_article", component: CreateArticlePage },
  { path: "/articles_list/:article_id", component: SingleArticlePage },
  { path: "/login", component: LoginPage, layout: NoneFooterLayout },
  { path: "/register", component: RegisterPage,layout: NoneFooterLayout  },
];
const privateRoutes = [
  {
    path: "articles",
    component: AdminArticles,
    children: [
      { path: "create", component: CreateArticlePage },
      { path: "list", component: ArticlesListPage },
      { path: "list/:article_id", component: EditArticlePage },
    ],
  },
  {
    path: "users",
    component: AdminUsersPage,
    children: [{ path: "list", component: UserListPage }],
  },
];
export { privateRoutes, publicRoutes };
