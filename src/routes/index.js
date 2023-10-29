import HomePage from "../pages/HomePage";
import DataAccessPage from "../pages/DataAccessPage";
import ArticlesPage from "../pages/ArticlesPage";
import AirQualityPage from "../pages/NestedPage/AirQualityPage";
import WeatherForcastPage from "../pages/NestedPage/WeatherForcastPage";
import HistoricalWeatherPage from "../pages/NestedPage/HistoricalWeatherPage";
import SingleArticlePage from "../pages/SingleArticlePage";
import CreateArticlePage from "../pages/admin/CreateArticlePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NoneFooterLayout from './../layouts/NoneFooterLayout/index';

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
    // children: [{ path: ":articles_id", component: SingleArticlePage }],
  },
  { path: "/articles/:article_id", component: SingleArticlePage },
  { path: "/create_article", component: CreateArticlePage },
  { path: "/login", component: Login, layout: NoneFooterLayout },
  { path: "/register", component: Register, layout: NoneFooterLayout},
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };
