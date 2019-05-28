import express from 'express';
import mcache from 'memory-cache';
import xmlDownloader from './xml/xmldownloader';

const app = express();
const port = process.env.PORT || 3000;

const cityUrl = 'http://dd.weatheroffice.ec.gc.ca/citypage_weather/xml/siteList.xml';

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