import { useState } from "react";
import { Bot, X, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "✨ Hello! I'm VidyaBot, your AI learning companion! 🤖 How can I help you with your studies today? 📚",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const predefinedResponses: { [key: string]: string } = {
    'services': 'We offer study plans, tutoring support, and personalized learning strategies.',
    'math': 'For math, try breaking problems into smaller steps and practice regularly!',
    'science': 'Science topics can be mastered by experimenting and reviewing key concepts frequently.',
    'schedule': 'Would you like help setting up a study schedule for your subjects?',
    'help': 'Feel free to ask me about study strategies, exam preparation, or stress management.'
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    for (const [keyword, response] of Object.entries(predefinedResponses)) {
      if (message.includes(keyword)) {
        return response;
      }
    }
    if (message.includes('hello') || message.includes('hi')) {
      return "Hello! I'm always here to assist you with your studies. What would you like to learn today?";
    }
    if (message.includes('thank')) {
      return "You're welcome! Keep studying and reach out if you need more help.";
    }
    return "I'm here to help! Ask me about study strategies, scheduling, or subject-related queries.";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(userMessage.text),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot toggle button */}
      {/* Chatbot Button - Bottom Right */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-smooth z-[50] p-0 fab hover-glow ripple pulse-glow heartbeat"
        data-testid="button-chatbot-toggle"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
        <span className="text-2xl bounce-in">🤖</span>
      </Button>

      {/* Chatbot window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 h-[60vh] bg-card/95 backdrop-blur-sm border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                
              </div>
              <div>
                <h3 className="font-semibold">✨ VidyaBot</h3>
                <p className="text-xs opacity-80">Your AI learning companion</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-background/50 backdrop-blur-sm space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-xs p-3 rounded-lg ${
                  message.isBot
                    ? 'bg-card/90 backdrop-blur-sm border border-border text-sm'
                    : 'bg-gradient-to-r from-primary to-secondary text-primary-foreground ml-auto shadow-lg'
                }`}
              >
                <p>{message.text}</p>
                <p className="text-[10px] text-muted-foreground mt-1 text-right">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            ))}
            {isTyping && (
              <div className="max-w-xs p-3 rounded-lg bg-card/90 backdrop-blur-sm border border-border text-sm flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
                </div>
                <span className="text-xs text-muted-foreground">Typing...</span>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-background/95 backdrop-blur-sm rounded-b-2xl">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 text-sm hover-glow"
              />
              <Button onClick={handleSendMessage} size="sm" className="px-4 hover-glow ripple pulse-glow">
                🚀 Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
