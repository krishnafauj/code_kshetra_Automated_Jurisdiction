import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, MinusCircle, Bot, User } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      type: 'bot', 
      text: 'Hello! 👋 I\'m your AI assistant. How can I help you today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const trimmedMessage = inputMessage.trim();
    if (!trimmedMessage) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setMessages((prev) => [...prev, { type: 'user', text: trimmedMessage, timestamp }]);
    setInputMessage('');

    setIsBotTyping(true);

    try {
      // Replace with your API endpoint
      const response = await fetch('https://api.example.com/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: trimmedMessage }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          type: 'bot',
          text: data.response, // Assuming the API returns a response in this format
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (error) {
      console.error('Error fetching the API:', error);
      setMessages((prev) => [
        ...prev,
        {
          type: 'bot',
          text: "Sorry, I encountered an error while processing your request. Please try again later.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsBotTyping(false);
    }
  };

  return (
    <div className="fixed bottom-14 right-4 z-50">
      {/* Chat Icon Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
          className="bg-indigo-600 text-white p-4 rounded-full shadow-lg ring-4 ring-offset-sky-900 ring-offset-1 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
        >
          <Bot className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`bg-white rounded-xl shadow-2xl w-[380px] transition-all duration-300 ease-in-out transform ${
            isMinimized ? 'h-14' : 'h-[600px]'
          }`}
          role="dialog"
          aria-label="Chat window"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-4 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Bot className="w-6 h-6" />
              <div>
                <h2 className="font-semibold text-lg">LegalAI Assistant</h2>
                {!isMinimized && (
                  <p className="text-xs text-indigo-200">Always here to help</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                aria-label={isMinimized ? 'Expand chat' : 'Minimize chat'}
                className="text-white hover:bg-indigo-500/50 p-1.5 rounded-lg transition-colors"
              >
                <MinusCircle className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="hover:bg-indigo-500/50 p-1.5 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 " />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Container */}
              <div className="p-4 h-[480px] overflow-y-auto bg-gray-50">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 flex ${
                      message.type === 'user' ? 'justify-end' : 'justify-start'
                    } items-end gap-2`}
                  >
                    {message.type === 'bot' && (
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-indigo-600" />
                      </div>
                    )}
                    <div
                      className={`group relative max-w-[70%] p-4 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-gradient-to-br from-indigo-600 to-indigo-700 text-white'
                          : 'bg-white shadow-md text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span className={`text-[10px] mt-1 block ${
                        message.type === 'user' ? 'text-indigo-200' : 'text-gray-400'
                      }`}>
                        {message.timestamp}
                      </span>
                    </div>
                    {message.type === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                ))}
                {isBotTyping && (
                  <div className="mb-4 flex items-end gap-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="bg-white shadow-md rounded-2xl p-4 max-w-[70%]">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form
                onSubmit={handleSendMessage}
                className="border-t bg-white p-4 rounded-b-xl flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  aria-label="Type your message"
                  className="flex-1 bg-gray-50 border text-black border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  aria-label="Send message"
                  className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;