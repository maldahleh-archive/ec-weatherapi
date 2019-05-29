import xmlDownloader from "../xml/xml-downloader";

const cityUrl = 'http://dd.weatheroffice.ec.gc.ca/citypage_weather/xml/siteList.xml';

export default (req, res) => {
    xmlDownloader(cityUrl, (error, result) => {
        if (error) {
            res.sendStatus(502);
            return;
        }

        const cities = [];
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
};