import express from 'express';

import cacheMiddleware from './middleware/cache-middleware';
import cityRoute from './routes/cities-route';
import forecastRoute from './routes/forecast-route';

const app = express();
app.use(cacheMiddleware);
app.get('/cities', cityRoute);
app.get('/forecast', forecastRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});