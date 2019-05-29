import mcache from 'memory-cache';
import xmlDownloader from "../xml/xml-downloader";

const cityUrl = 'http://dd.weatheroffice.ec.gc.ca/citypage_weather/xml/siteList.xml';

const cacheSeconds = 300;
const cacheKey = 'cities';

export default (cityId, callback) => {
    const cache = mcache.get(cacheKey);
    if (cache) {
        callback(cache.get(cityId));
        return;
    }

    xmlDownloader(cityUrl, (error, result) => {
        if (error) {
            callback(undefined);
            return;
        }

        const cities = new Map();
        result['siteList']['site'].forEach((e) => {
            const localId = e['$']['code'];
            const province = e['provinceCode'][0];
            if (localId === cityId) {
                callback(province);
            }

            cities.set(localId, province);
        });

        mcache.put(cacheKey, cities, cacheSeconds * 1000);
    });
};