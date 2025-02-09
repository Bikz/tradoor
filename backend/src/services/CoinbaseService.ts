import { Client } from 'coinbase';
import { config } from '../config/config';
import { ethers } from 'ethers';

export class CoinbaseService {
  private client: Client;
  private baseProvider: ethers.JsonRpcProvider;

  constructor() {
    this.client = new Client({
      apiKey: config.coinbase.apiKey,
      apiSecret: config.coinbase.apiSecret,
    });

    this.baseProvider = new ethers.JsonRpcProvider(config.coinbase.baseRpcUrl);
  }

  async getMarketPrice(symbol: string): Promise<number> {
    try {
      const response = await this.client.getSpotPrice({ currency: symbol });
      return parseFloat(response.data.amount);
    } catch (error) {
      throw new Error(`Failed to fetch market price: ${error.message}`);
    }
  }

  async getAccountBalance(): Promise<any> {
    try {
      const accounts = await this.client.getAccounts();
      return accounts.data;
    } catch (error) {
      throw new Error(`Failed to fetch account balance: ${error.message}`);
    }
  }

  async getBaseBalance(address: string): Promise<string> {
    try {
      const balance = await this.baseProvider.getBalance(address);
      return ethers.formatEther(balance);
    } catch (error) {
      throw new Error(`Failed to fetch Base balance: ${error.message}`);
    }
  }
} 