import HomePage from "../pages/HomePage";
import DataAccessPage from "../pages/DataAccessPage";
import ArticlesPage from "../pages/ArticlesPage";
import AirQualityPage from "../pages/NestedPage/AirQualityPage";
import WeatherForcastPage from "../pages/NestedPage/WeatherForcastPage";
import HistoricalWeatherPage from "../pages/NestedPage/HistoricalWeatherPage";
import SingleArticlePage from "../pages/SingleArticlePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NoneFooterLayout from './../layouts/NoneFooterLayout/index';
import CreateArticlePage from "../pages/admin/NestedPage/CreateArticlePage";
import AdminArticles from "../pages/admin/AdminArticlesPage";
import AdminUsersPage from "../pages/admin/AdminUsersPage";
import ArticlesListPages from "../pages/admin/NestedPage/ArticlesListPages";
import TestLogin from "../pages/TestLogin";
import TestRegister from "../pages/TestRegister";
import UserListPage from "../pages/admin/NestedPage/UserListPage";

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
