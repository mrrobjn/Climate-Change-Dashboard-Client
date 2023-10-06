import HomePage from "../pages/HomePage";
import DataAccessPage from "../pages/DataAccessPage";
import ArticlesPage from "../pages/ArticlesPage";
import AirQualityPage from "../pages/NestedPage/AirQualityPage";
import WeatherForcastPage from "../pages/NestedPage/WeatherForcastPage";
import HistoricalWeatherPage from "../pages/NestedPage/HistoricalWeatherPage";

const publicRoutes = [
    { path: "/", component: HomePage },
    {
        path: "/dataaccess",
        component: DataAccessPage,
        children: [
            { path: "weatherforecast", component: WeatherForcastPage },
            { path: "historicalweather", component: HistoricalWeatherPage },
            { path: "airquality", component: AirQualityPage }
        ]
    },
    { path: "/articles", component: ArticlesPage },
]
const privateRoutes = [
]
export { privateRoutes, publicRoutes }