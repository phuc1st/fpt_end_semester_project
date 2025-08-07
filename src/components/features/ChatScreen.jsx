import React, { useState, useEffect, useRef } from 'react';
import { MessageBubble } from '../ui';

const ChatScreen = ({ 
  conversation,
  onSendMessage,
  onCall,
  onVideoCall,
  onShowInfo
}) => {
  const [messageText, setMessageText] = useState('');
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [conversation?.messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageText.trim() && onSendMessage) {
      onSendMessage(messageText.trim());
      setMessageText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const handleImageUpload = () => {
    console.log('Image upload clicked');
    // TODO: Implement image upload
  };

  const handleEmojiClick = () => {
    console.log('Emoji picker clicked');
    // TODO: Implement emoji picker
  };

  if (!conversation) {
    return (
      <div className="col-span-12 md:col-span-8 lg:col-span-9 flex items-center justify-center h-full bg-gray-50">
        <div className="text-center text-gray-500">
          <i className="fa-regular fa-comments text-6xl mb-4"></i>
          <h2 className="text-2xl font-bold mb-2">Tin nhắn của bạn</h2>
          <p>Chọn một cuộc trò chuyện để bắt đầu.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="col-span-12 md:col-span-8 lg:col-span-9 flex flex-col h-full bg-white">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src={conversation.avatar} 
              alt={conversation.name} 
              className="w-10 h-10 rounded-full"
            />
            <span className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white ${
              conversation.online ? 'bg-green-500' : 'bg-gray-400'
            }`}></span>
          </div>
          <div>
            <p className="font-bold text-sm md:text-base">{conversation.name}</p>
            <p className="text-xs text-gray-500">
              {conversation.online ? 'Đang hoạt động' : `Hoạt động ${conversation.time.toLowerCase()}`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4 text-gray-500">
          <button 
            onClick={() => onCall && onCall(conversation.id)}
            className="hover:text-primary p-1 md:p-2 rounded-full hover:bg-gray-100 transition-colors"
            title="Gọi điện"
          >
            <i className="fa-solid fa-phone text-lg md:text-xl"></i>
          </button>
          <button 
            onClick={() => onVideoCall && onVideoCall(conversation.id)}
            className="hover:text-primary p-1 md:p-2 rounded-full hover:bg-gray-100 transition-colors"
            title="Gọi video"
          >
            <i className="fa-solid fa-video text-lg md:text-xl"></i>
          </button>
          <button 
            onClick={() => onShowInfo && onShowInfo(conversation.id)}
            className="hover:text-primary p-1 md:p-2 rounded-full hover:bg-gray-100 transition-colors"
            title="Thông tin"
          >
            <i className="fa-solid fa-circle-info text-lg md:text-xl"></i>
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div 
        ref={messagesContainerRef}
        className="chat-messages flex-grow p-4 md:p-6 overflow-y-auto"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#d1d5db transparent'
        }}
      >
        <div className="space-y-1">
          {conversation.messages && conversation.messages.length > 0 ? (
            conversation.messages.map((message, index) => (
              <MessageBubble
                key={index}
                message={message}
                isOwn={message.sender === 'me'}
              />
            ))
          ) : (
            <div className="text-center text-gray-500 py-8">
              <i className="fa-regular fa-comment-dots text-3xl mb-2"></i>
              <p>Chưa có tin nhắn nào</p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat Input */}
      <div className="p-3 md:p-4 bg-white border-t border-gray-200 flex-shrink-0">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <button 
            type="button"
            onClick={handleImageUpload}
            className="text-gray-500 hover:text-primary p-2 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
            title="Gửi ảnh"
          >
            <i className="fa-solid fa-image text-lg md:text-xl"></i>
          </button>
          
          <div className="flex-grow relative">
            <input 
              type="text" 
              placeholder="Nhập tin nhắn..." 
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full bg-gray-100 rounded-full py-2 md:py-3 px-4 md:px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button 
              type="button"
              onClick={handleEmojiClick}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-primary transition-colors"
              title="Emoji"
            >
              <i className="fa-regular fa-face-smile text-lg md:text-xl"></i>
            </button>
          </div>
          
          <button 
            type="submit"
            disabled={!messageText.trim()}
            className={`p-2 rounded-full flex-shrink-0 transition-colors ${
              messageText.trim()
                ? 'text-primary hover:text-primary-700 hover:bg-primary-50'
                : 'text-gray-400 cursor-not-allowed'
            }`}
            title="Gửi tin nhắn"
          >
            <i className="fa-solid fa-paper-plane text-xl md:text-2xl"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;