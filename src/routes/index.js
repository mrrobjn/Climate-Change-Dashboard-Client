import React from 'react';

const HomePage = React.lazy(() => import('../pages/HomePage'));
const DataAccessPage = React.lazy(() => import('../pages/DataAccessPage'));
const ArticlesPage = React.lazy(() => import('../pages/ArticlesPage'));
const AirQualityPage = React.lazy(() => import('../pages/NestedPage/AirQualityPage'));
const WeatherForcastPage = React.lazy(() => import('../pages/NestedPage/WeatherForcastPage'));
const HistoricalWeatherPage = React.lazy(() => import('../pages/NestedPage/HistoricalWeatherPage'));
const SingleArticlePage = React.lazy(() => import('../pages/SingleArticlePage'));
const Login = React.lazy(() => import('../pages/Login'));
const Register = React.lazy(() => import('../pages/Register'));
const NoneFooterLayout = React.lazy(() => import('./../layouts/NoneFooterLayout/index'));
const CreateArticlePage = React.lazy(() => import('../pages/admin/NestedPage/CreateArticlePage'));
const AdminArticles = React.lazy(() => import('../pages/admin/AdminArticlesPage'));
const AdminUsersPage = React.lazy(() => import('../pages/admin/AdminUsersPage'));
const ArticlesListPages = React.lazy(() => import('../pages/admin/NestedPage/ArticlesListPages'));
const TestLogin = React.lazy(() => import('../pages/TestLogin'));
const TestRegister = React.lazy(() => import('../pages/TestRegister'));
const UserListPage = React.lazy(() => import('../pages/admin/NestedPage/UserListPage'));

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
  { path: "/login", component: Login, layout: NoneFooterLayout },
  { path: "/register", component: Register, layout: NoneFooterLayout},
  { path: "/articles_list/:article_id", component: SingleArticlePage },
  { path: "/test_login", component: TestLogin },
  { path: "/test_register", component: TestRegister },
];
const privateRoutes = [
  {
    path: "articles",
    component: AdminArticles,
    children: [
      { path: "create", component: CreateArticlePage },
      { path: "list", component: ArticlesListPages },
    ],
  },
  {
    path: "users",
    component: AdminUsersPage,
    children: [
      { path: "list", component: UserListPage },
    ],
  },
];
export { privateRoutes, publicRoutes };
