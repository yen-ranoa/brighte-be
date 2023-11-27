import express from 'express';
import bodyParser from 'body-parser';
import loadRoutes from './loaders/routes';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors());
loadRoutes(app);

export default app;
