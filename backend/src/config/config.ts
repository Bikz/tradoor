import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  coinbase: {
    apiKey: process.env.COINBASE_API_KEY,
    apiSecret: process.env.COINBASE_API_SECRET,
    baseRpcUrl: process.env.BASE_RPC_URL || 'https://mainnet.base.org',
  },
  environment: process.env.NODE_ENV || 'development',
}; 