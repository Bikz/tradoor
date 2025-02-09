
import { ChatInterface } from "@/components/ChatInterface";
import { PortfolioOverview } from "@/components/PortfolioOverview";
import { TransactionHistory } from "@/components/TransactionHistory";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="text-center mb-10 animate-fade-up">
          <h1 className="text-4xl font-bold mb-2">Tradoor.fun</h1>
          <p className="text-gray-600">Your AI-Powered Trading Assistant</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <PortfolioOverview />
            <TransactionHistory />
          </div>
          <div>
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
