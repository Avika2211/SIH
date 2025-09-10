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
      text: "✨ Hi Alex! I'm VidyaBot, your AI learning companion! 🤖 I'm here to help with any questions or concerns you might have. How are you feeling about your studies today? 🎓",
      isUser: false
    },
    {
      text: "I'm a bit stressed about my upcoming math exam. 😰",
      isUser: true
    },
    {
      text: "💖 I understand that can be overwhelming. Let me suggest some study strategies and resources that might help. Would you like me to schedule some study sessions or connect you with tutoring support? 📚✨",
      isUser: false
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages(prev => [...prev, { text: inputMessage, isUser: true }]);
      setInputMessage("");
      setIsTyping(true);
      
      // Mock bot response with typing indicator
      setTimeout(() => {
        const responses = [
          "💡 I understand your concern. Let me help you with that! ✨",
          "🎯 That's a great question! Here are some resources that might help. 📚",
          "💖 I'm here to support you. Would you like me to connect you with a counselor? 🤝",
          "🌟 You're doing great! Keep up the positive attitude! 🎉"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setIsTyping(false);
        setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-6 w-80 h-96 bg-card/95 backdrop-blur-sm border border-border rounded-2xl shadow-2xl z-50 flex flex-col bounce-in hover-glow" data-testid="chatbot-overlay">
      <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground p-4 rounded-t-2xl flex items-center justify-between pulse-glow">
        <div className="flex items-center space-x-3 fade-in-left animate">
          <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center heartbeat">
            <span className="text-sm">🤖</span>
          </div>
          <div>
            <h3 className="font-semibold shimmer elegant-text">✨ VidyaBot</h3>
            <p className="text-xs opacity-80 premium-text">💖 Your AI learning companion</p>
          </div>
        </div>
        <Button 
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-primary-foreground/80 hover:text-primary-foreground p-2 hover-glow ripple"
          data-testid="button-close-chatbot"
        >
          ❌
        </Button>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto bg-background/50 backdrop-blur-sm animated-gradient-bg">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`p-3 rounded-lg max-w-xs bounce-in hover-glow ${
                message.isUser 
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground ml-auto shadow-lg' 
                  : 'bg-card/90 backdrop-blur-sm shadow-lg border border-border'
              }`}
              data-testid={`message-${index}`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          ))}
          {isTyping && (
            <div className="p-3 rounded-lg max-w-xs bg-card/90 backdrop-blur-sm shadow-lg border border-border bounce-in">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full heartbeat"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full heartbeat" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-primary rounded-full heartbeat" style={{animationDelay: '0.4s'}}></div>
                </div>
                <span className="text-xs text-muted-foreground shimmer">🤖 VidyaBot is typing...</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4 border-t border-border bg-background/95 backdrop-blur-sm rounded-b-2xl">
        <div className="flex space-x-2">
          <Input 
            type="text"
            placeholder="✨ Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 text-sm hover-glow"
            data-testid="input-chatbot-message"
          />
          <Button 
            onClick={handleSendMessage}
            size="sm"
            className="px-4 hover-glow ripple pulse-glow"
            data-testid="button-send-message"
          >
            🚀 Send
          </Button>
        </div>
      </div>
    </div>
  );
}
