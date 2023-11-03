import HomePage from "../pages/HomePage";
import DataAccessPage from "../pages/DataAccessPage";
import ArticlesPage from "../pages/ArticlesPage";
import AirQualityPage from "../pages/NestedPage/AirQualityPage";
import WeatherForcastPage from "../pages/NestedPage/WeatherForcastPage";
import HistoricalWeatherPage from "../pages/NestedPage/HistoricalWeatherPage";
import SingleArticlePage from "../pages/SingleArticlePage";
import CreateArticlePage from "../pages/admin/NestedPage/CreateArticlePage";
import AdminArticles from "../pages/admin/AdminArticlesPage";
import AdminUsersPage from "../pages/admin/AdminUsersPage";
import ArticlesListPages from "../pages/admin/NestedPage/ArticlesListPages";

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
  { path: "/articles_list/:article_id", component: SingleArticlePage },
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
  },
];
export { privateRoutes, publicRoutes };
