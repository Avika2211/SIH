import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatMessage {
  text: string;
  isUser: boolean;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: "Hi Alex! I'm here to help with any questions or concerns you might have. How are you feeling about your studies today?",
      isUser: false
    },
    {
      text: "I'm a bit stressed about my upcoming math exam.",
      isUser: true
    },
    {
      text: "I understand that can be overwhelming. Let me suggest some study strategies and resources that might help. Would you like me to schedule some study sessions or connect you with tutoring support?",
      isUser: false
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages(prev => [...prev, { text: inputMessage, isUser: true }]);
      setInputMessage("");
      
      // Mock bot response
      setTimeout(() => {
        const responses = [
          "I understand your concern. Let me help you with that.",
          "That's a great question! Here are some resources that might help.",
          "I'm here to support you. Would you like me to connect you with a counselor?",
          "You're doing great! Keep up the positive attitude."
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-6 w-80 h-96 bg-card border border-border rounded-2xl shadow-2xl z-50 flex flex-col" data-testid="chatbot-overlay">
      <div className="bg-primary text-primary-foreground p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <span className="text-sm">🤖</span>
          </div>
          <div>
            <h3 className="font-semibold">VidyaBot</h3>
            <p className="text-xs opacity-80">Your learning companion</p>
          </div>
        </div>
        <Button 
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-primary-foreground/80 hover:text-primary-foreground p-2"
          data-testid="button-close-chatbot"
        >
          ✕
        </Button>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto bg-background">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`p-3 rounded-lg max-w-xs ${
                message.isUser 
                  ? 'bg-primary text-primary-foreground ml-auto' 
                  : 'bg-muted/30'
              }`}
              data-testid={`message-${index}`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4 border-t border-border bg-background rounded-b-2xl">
        <div className="flex space-x-2">
          <Input 
            type="text"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 text-sm"
            data-testid="input-chatbot-message"
          />
          <Button 
            onClick={handleSendMessage}
            size="sm"
            className="px-4"
            data-testid="button-send-message"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
