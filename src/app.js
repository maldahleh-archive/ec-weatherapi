import express from 'express';
import mcache from 'memory-cache';
import xmlDownloader from './xml/xmldownloader';

const app = express();
const port = process.env.PORT || 3000;

const cityUrl = 'http://dd.weatheroffice.ec.gc.ca/citypage_weather/xml/siteList.xml';

const cacheSeconds = 300;
const cache = () => {
    return (req, res, next) => {
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
    }
};

app.get('/cities', cache(), (req, res) => {
    xmlDownloader(cityUrl, (error, result) => {
       if (error) {
           res.send(502);
           return;
       }

       res.json(result);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});