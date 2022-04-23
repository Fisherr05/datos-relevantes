import express from 'express';
import estacionesRoutes from './routes/estaciones.routes.js';

const app = express();

app.use(express.json());
app.use(estacionesRoutes);
export default app;