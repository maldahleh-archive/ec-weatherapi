import http from 'http';
import { parseString } from 'xml2js';

export default (url, callback) => {
    http.get(url, (res) => {
        let xml = '';

        res.on('data', (chunk) => {
            xml += chunk;
        });

        res.on('error', (e) => {
            callback(e, null);
        });

        res.on('timeout', (e) => {
            callback(e, null);
        });

        res.on('end', () => {
            parseString(xml, (err, result) => {
                callback(null, result);
            });
        });
    }).on('error', (e) => {
        callback(e, null);
    });
};