import React, { useState } from 'react';

const ConversationList = ({ 
  conversations = [], 
  selectedConversationId, 
  onSelectConversation 
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter conversations based on search query
  const filteredConversations = conversations.filter(conversation =>
    conversation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conversation.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleConversationClick = (conversationId) => {
    if (onSelectConversation) {
      onSelectConversation(conversationId);
    }
  };

  const formatTime = (time) => {
    // Handle different time formats
    if (time.includes(':')) {
      return time; // Already formatted like "10:30"
    }
    return time; // Return as is for relative times like "Hôm qua", "Thứ 7"
  };

  return (
    <aside className="col-span-12 md:col-span-4 lg:col-span-3 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex-shrink-0">
        <h1 className="text-xl md:text-2xl font-bold mb-3">Tin nhắn</h1>
        <div className="relative">
          <i className="fa-solid fa-magnifying-glass absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"></i>
          <input 
            type="text" 
            placeholder="Tìm kiếm trong tin nhắn" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 rounded-full py-2 pl-9 pr-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Conversation List */}
      <div className="flex-grow overflow-y-auto">
        {filteredConversations.length > 0 ? (
          filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => handleConversationClick(conversation.id)}
              className={`conversation-item flex items-center gap-3 p-3 cursor-pointer border-b border-l-4 transition-all hover:bg-gray-50 ${
                selectedConversationId === conversation.id
                  ? 'active bg-primary-50 border-primary'
                  : 'border-transparent'
              }`}
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <img 
                  src={conversation.avatar} 
                  alt={conversation.name} 
                  className="w-12 h-12 rounded-full"
                />
                {conversation.online && (
                  <span className="absolute bottom-0 right-0 block h-3 w-3 bg-green-500 rounded-full ring-2 ring-white"></span>
                )}
              </div>

              {/* Content */}
              <div className="flex-grow overflow-hidden">
                <div className="flex justify-between items-center">
                  <p className="font-semibold truncate text-sm md:text-base">
                    {conversation.name}
                  </p>
                  <p className="text-xs text-gray-500 flex-shrink-0">
                    {formatTime(conversation.time)}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className={`text-sm text-gray-600 truncate ${
                    conversation.unread > 0 ? 'font-bold' : ''
                  }`}>
                    {conversation.lastMessage}
                  </p>
                  {conversation.unread > 0 && (
                    <span className="bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0 ml-2">
                      {conversation.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-6 text-center text-gray-500">
            <i className="fa-solid fa-magnifying-glass text-2xl mb-2"></i>
            <p className="text-sm">Không tìm thấy cuộc trò chuyện nào</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default ConversationList;