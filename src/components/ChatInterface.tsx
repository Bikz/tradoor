
import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from './ui/button';

export const ChatInterface = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    // Handle message submission
    setMessage('');
  };

  return (
    <div className="glass-panel p-4 h-[500px] flex flex-col animate-fade-up">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
        <span className="text-sm font-medium">AI Agent Active</span>
      </div>
      
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {/* Example messages */}
        <div className="flex gap-2">
          <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
            <p className="text-sm">Hello! I'm your AI trading assistant. How can I help you today?</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 rounded-lg border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <Button type="submit" size="icon" className="rounded-lg">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};
