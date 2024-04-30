import express, { json } from 'express';

import authRoutes from './routes/authRoutes';

export const app = express();

app.use(json());

// Routes

// autenticación
app.use('/auth', authRoutes);
// hacer una api rest de usuarios
