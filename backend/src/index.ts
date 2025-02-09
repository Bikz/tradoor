import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from './config/config';
import { marketRoutes } from './routes/market.routes';
import { accountRoutes } from './routes/account.routes';

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.use('/api/market', marketRoutes);
app.use('/api/account', accountRoutes);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
}); 