import cityLookup from '../helpers/city-lookup';
import { parseCreation, parseLocation, parseCurrent, parseForecast, parseHourly, parseNormals, parseWarnings, parseSunInfo,
    parseYesterday, parseAlmanac } from '../helpers/xml-helpers';
import xmlDownloader from "../xml/xml-downloader";

const forecastUrl = 'http://dd.weatheroffice.ec.gc.ca/citypage_weather/xml/';

export default (req, res) => {
    const cityId = req.query.cityId;
    if (typeof cityId === 'undefined') {
        res.sendStatus(400);
        return;
    }

    cityLookup(cityId, (provinceCode) => {
        if (typeof provinceCode === 'undefined') {
            res.sendStatus(400);
            return;
        }

        const language = typeof req.query.french === 'undefined' ? 'e' : 'f';
        const forecastConstructedUrl = forecastUrl + provinceCode + "/" + cityId + "_" + language + ".xml";
        xmlDownloader(forecastConstructedUrl, (error, result) => {
            if (error) {
                res.sendStatus(502);
                return;
            }

            res.json({
                'creation': parseCreation(result['siteData']['dateTime']),
                'location': parseLocation(result['siteData']['location'][0]),
                'warnings': parseWarnings(result['siteData']['warnings'][0]),
                'currentConditions': parseCurrent(result['siteData']['currentConditions'][0]),
                'hourly': parseHourly(result['siteData']['hourlyForecastGroup'][0]),
                'forecast': parseForecast(result['siteData']['forecastGroup'][0]['forecast']),
                'normals': parseNormals(result['siteData']['forecastGroup'][0]['regionalNormals'][0]),
                'sun': parseSunInfo(result['siteData']['riseSet'][0]),
                'yesterday': parseYesterday(result['siteData']['yesterdayConditions'][0]),
                'almanac': parseAlmanac(result['siteData']['almanac'][0])
            });
        });
    });
};