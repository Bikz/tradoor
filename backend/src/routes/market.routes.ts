import { Router } from 'express';
import { CoinbaseService } from '../services/CoinbaseService';

const router = Router();
const coinbaseService = new CoinbaseService();

router.get('/price/:symbol', async (req, res) => {
  try {
    const { symbol } = req.params;
    const price = await coinbaseService.getMarketPrice(symbol);
    res.json({ price });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export const marketRoutes = router; 