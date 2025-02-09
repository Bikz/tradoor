
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const data = [
  { time: '9:00', value: 1000 },
  { time: '10:00', value: 1200 },
  { time: '11:00', value: 1100 },
  { time: '12:00', value: 1300 },
  { time: '13:00', value: 1250 },
  { time: '14:00', value: 1400 },
  { time: '15:00', value: 1350 },
  { time: '16:00', value: 1500 },
];

export const PortfolioOverview = () => {
  return (
    <div className="glass-panel p-6 animate-fade-up">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Portfolio Value</h2>
          <p className="text-3xl font-bold mt-1">$1,500.00</p>
          <span className="text-green-500 text-sm">+12.5% today</span>
        </div>
        <div className="space-y-1 text-right">
          <p className="text-sm text-gray-500">Initial Investment</p>
          <p className="font-medium">$1,000.00</p>
        </div>
      </div>

      <div className="h-[200px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity={0.2} />
                <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="time" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="rgb(59, 130, 246)"
              fill="url(#gradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
