import xmlDownloader from "../xml/xml-downloader";

const forecastUrl = 'http://dd.weatheroffice.ec.gc.ca/citypage_weather/xml/';

export default (req, res) => {
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
};