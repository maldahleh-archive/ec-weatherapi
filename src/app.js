import express from 'express';
import xmlDownloader from './xml/xmldownloader';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});