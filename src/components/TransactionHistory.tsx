
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const transactions = [
  { id: 1, type: 'buy', asset: 'BTC', amount: 0.05, price: 52415.75, timestamp: '2024-02-20 14:30' },
  { id: 2, type: 'sell', asset: 'ETH', amount: 1.2, price: 3105.25, timestamp: '2024-02-20 13:15' },
  { id: 3, type: 'buy', asset: 'SOL', amount: 15, price: 105.50, timestamp: '2024-02-20 11:45' },
];

export const TransactionHistory = () => {
  return (
    <div className="glass-panel p-6 animate-fade-up">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-3 rounded-lg bg-white/50 card-hover"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${
                transaction.type === 'buy' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                {transaction.type === 'buy' ? (
                  <ArrowDownRight className="h-4 w-4 text-green-600" />
                ) : (
                  <ArrowUpRight className="h-4 w-4 text-red-600" />
                )}
              </div>
              <div>
                <p className="font-medium">{transaction.asset}</p>
                <p className="text-sm text-gray-500">{transaction.timestamp}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">${transaction.price.toLocaleString()}</p>
              <p className="text-sm text-gray-500">{transaction.amount} {transaction.asset}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
