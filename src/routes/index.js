import AirQualityPage from "../pages/AirQualityPage";
import DataAccessPage from "../pages/DataAccessPage";
import HomePage from "../pages/HomePage";
import WeatherForcastPage from "../pages/WeatherForcastPage";
import HistoricalWeatherPage from "../pages/HistoricalWeatherPage";

const publicRoutes = [
    { path: "/", component: HomePage },
    {
        path: "/dataaccess",
        component: DataAccessPage,
        children: [
            { path: "weatherforcast", component: WeatherForcastPage },
            { path: "historicalweather", component: HistoricalWeatherPage },
            { path: "airquality", component: AirQualityPage }
        ]
    }
    
]
const privateRoutes = [
]
export { privateRoutes, publicRoutes }