import React from 'react';

const MessageBubble = ({ message, isOwn = false }) => {
  const renderMessageContent = () => {
    if (message.type === 'image') {
      return (
        <div className="space-y-2">
          <div className="bg-gray-200 rounded-lg p-2">
            <i className="fa-solid fa-image text-2xl text-gray-400"></i>
          </div>
          <p className="text-sm">{message.text}</p>
        </div>
      );
    }
    
    return <p>{message.text}</p>;
  };

  if (isOwn) {
    return (
      <div className="flex justify-end mb-4">
        <div className="bg-primary text-white p-3 rounded-lg max-w-xs lg:max-w-md break-words">
          {renderMessageContent()}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start mb-4">
      <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs lg:max-w-md break-words">
        {renderMessageContent()}
      </div>
    </div>
  );
};

export default MessageBubble;