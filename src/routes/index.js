import HomePage from "../pages/HomePage";
import DataAccessPage from "../pages/DataAccessPage";
import ArticlesPage from "../pages/ArticlesPage";
import AirQualityPage from "../pages/NestedPage/AirQualityPage";
import WeatherForcastPage from "../pages/NestedPage/WeatherForcastPage";
import HistoricalWeatherPage from "../pages/NestedPage/HistoricalWeatherPage";
import SingleArticlePage from "../pages/SingleArticlePage";
import CreateArticlePage from "../pages/admin/CreateArticlePage";
import AdminPage from "../pages/admin/AdminPage";

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
    path: "/articles",
    component: ArticlesPage,
  },
  { path: "/articles/:article_id", component: SingleArticlePage },
];
const privateRoutes = [
  {
    path: "/admin",
    component: AdminPage,
    children: [{ path: "create_article", component: CreateArticlePage }],
  },
];
export { privateRoutes, publicRoutes };
