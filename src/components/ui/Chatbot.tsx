import React, { useState } from 'react';
import { motion } from 'motion/react';
import { IoChatbubbles } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

const Chatbot: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ type: 'user' | 'bot'; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: userMessage }]
        }),
      });

      const data = await response.json();
      const botReply = data.reply || "I'm sorry, I couldn't understand that.";

      setMessages(prev => [...prev, { type: 'bot', text: botReply }]);
    } catch (error) {
      setMessages(prev => [...prev, { type: 'bot', text: 'Something went wrong. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50"
        aria-label="Open Chatbot"
      >
        <IoChatbubbles className='size-8' />
      </button>
    );
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="fixed text-white bottom-4 right-4 w-full max-w-xs sm:max-w-sm md:max-w-md z-50 bg-gray-900 rounded-xl shadow-lg"
    >
      <div className="flex justify-between items-center px-4 pt-3"> <h2 className="text-lg font-semibold">Need some help?</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-800"
          aria-label="Close Chatbot"
        >
          <RxCross2 className='size-6'/>
        </button>
      </div>
      <div className="h-64 overflow-y-auto mb-4 bg-black p-2 rounded mx-4 mt-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 text-sm ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded ${msg.type === 'user' ? 'bg-blue-500 rounded-xl' : ''}`}>
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <div className="text-left text-sm text-gray-500">Typing...</div>}
      </div>
      <div className="flex px-4 pb-4">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 border p-2 rounded-l"
          placeholder="Ask something about SoftSell..."
        />
        <button onClick={handleSend} className="bg-blue-500 text-white p-2 rounded-r" disabled={loading}>
          Send
        </button>
      </div>
    </motion.div>
  );
};

export default Chatbot;