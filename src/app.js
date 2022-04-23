import express from 'express';
import estacionesRoutes from './routes/estaciones.routes.js';
import cors from 'cors';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(estacionesRoutes);
export default app;