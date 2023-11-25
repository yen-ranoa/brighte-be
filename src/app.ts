import express from 'express';
import bodyParser from 'body-parser';
import loadRoutes from './loaders/routes';

const app = express();

app.use(bodyParser.json());
loadRoutes(app);

export default app;
