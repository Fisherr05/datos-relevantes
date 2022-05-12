import express from 'express';
import estacionesRoutes from './routes/estaciones.routes.js';
import formularioRoutes from './routes/formulario.routes.js';
import cors from 'cors';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(estacionesRoutes);
app.use(formularioRoutes);
export default app;