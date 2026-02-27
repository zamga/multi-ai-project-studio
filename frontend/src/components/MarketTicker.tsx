import { TrendingUp, TrendingDown } from 'lucide-react';

const tickerData = [
  { symbol: 'S&P 500', price: '5,842.31', change: '+1.24%', isUp: true },
  { symbol: 'DJIA', price: '44,156.73', change: '+0.87%', isUp: true },
  { symbol: 'NASDAQ', price: '18,923.45', change: '+1.56%', isUp: true },
  { symbol: 'FTSE 100', price: '8,234.12', change: '-0.32%', isUp: false },
  { symbol: 'EUR/USD', price: '1.0842', change: '+0.15%', isUp: true },
  { symbol: 'Gold', price: '2,847.60', change: '+0.78%', isUp: true },
  { symbol: 'Crude Oil', price: '76.24', change: '-0.45%', isUp: false },
  { symbol: 'BTC/USD', price: '97,842.00', change: '+2.34%', isUp: true },
  { symbol: 'Nikkei 225', price: '39,456.78', change: '+0.92%', isUp: true },
  { symbol: '10Y Treasury', price: '4.28%', change: '-0.03%', isUp: false },
  { symbol: 'DAX', price: '18,634.21', change: '+0.54%', isUp: true },
  { symbol: 'GBP/USD', price: '1.2648', change: '-0.21%', isUp: false },
];

function TickerItem({ symbol, price, change, isUp }: { symbol: string; price: string; change: string; isUp: boolean }) {
  return (
    <div className="flex items-center gap-4 px-6 flex-shrink-0">
      <span className="text-xs font-medium text-gray-400 whitespace-nowrap">{symbol}</span>
      <span className="text-sm font-semibold text-white whitespace-nowrap">{price}</span>
      <span className={`flex items-center gap-1 text-xs font-medium whitespace-nowrap ${isUp ? 'text-emerald-400' : 'text-red-400'}`}>
        {isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
        {change}
      </span>
    </div>
  );
}

export default function MarketTicker() {
  const doubledData = [...tickerData, ...tickerData];

  return (
    <div className="relative bg-[#060a14] border-t border-b border-white/5 py-3 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#060a14] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#060a14] to-transparent z-10" />
      <div className="ticker-scroll">
        {doubledData.map((item, i) => (
          <TickerItem key={`${item.symbol}-${i}`} {...item} />
        ))}
      </div>
    </div>
  );
}
