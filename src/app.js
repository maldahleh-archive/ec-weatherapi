import express from 'express';
import mcache from 'memory-cache';
import xmlDownloader from './xml/xml-downloader';

const app = express();
const port = process.env.PORT || 3000;

const cityUrl = 'http://dd.weatheroffice.ec.gc.ca/citypage_weather/xml/siteList.xml';
const forecastUrl = 'http://dd.weatheroffice.ec.gc.ca/citypage_weather/xml/';

const cacheSeconds = 300;
app.use((req, res, next) => {
    const key = '__express__' + req.originalUrl || req.url;
    const cachedBody = mcache.get(key);

    if (cachedBody) {
        res.send(cachedBody);
    } else {
        res.sendResponse = res.send;
        res.send = (body) => {
            mcache.put(key, body, cacheSeconds * 1000);
            res.sendResponse(body)
        };
        next()
    }
});

app.get('/cities', (req, res) => {
    xmlDownloader(cityUrl, (error, result) => {
       if (error) {
           res.sendStatus(502);
           return;
       }

       let cities = [];
       result['siteList']['site'].forEach((e) => {
           cities.push({
              'cityId': e['$']['code'],
              'englishName': e['nameEn'][0],
              'frenchName': e['nameFr'][0],
              'provinceCode': e['provinceCode'][0]
           });
       });

       res.json(cities);
    });
});

app.get('/forecast', (req, res) => {
    const provinceCode = req.query.province;
    const cityId = req.query.cityId;
    const language = req.query.language;
    if (typeof provinceCode === 'undefined' || typeof cityId === 'undefined'
        || typeof language === 'undefined') {
        res.sendStatus(400);
        return;
    }

    const forecastConstructedUrl = forecastUrl + provinceCode + "/" + cityId + "_" + language + ".xml";
    xmlDownloader(forecastConstructedUrl, (error, result) => {
        if (error) {
            res.sendStatus(502);
            return;
        }

        res.json(result);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});