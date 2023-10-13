import HomePage from "../pages/HomePage";
import DataAccessPage from "../pages/DataAccessPage";
import ArticlesPage from "../pages/ArticlesPage";
import AirQualityPage from "../pages/NestedPage/AirQualityPage";
import WeatherForcastPage from "../pages/NestedPage/WeatherForcastPage";
import HistoricalWeatherPage from "../pages/NestedPage/HistoricalWeatherPage";
import NewsPage from "../pages/NewsPage";

const publicRoutes = [
    { path: "/", component: HomePage },
    {
        path: "/data",
        component: DataAccessPage,
        children: [
            { path: "forecast", component: WeatherForcastPage },
            { path: "historical", component: HistoricalWeatherPage },
            { path: "air-quality", component: AirQualityPage }
        ]
    },
    { path: "/articles", component: ArticlesPage },
    { path: "/news", component: NewsPage },
]
const privateRoutes = [
]
export { privateRoutes, publicRoutes }