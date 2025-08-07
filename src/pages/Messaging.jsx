import React, { useState } from 'react';
import { Header } from '../components/layout';
import { ConversationList, ChatScreen } from '../components/features';

const Messaging = () => {
  const [selectedConversationId, setSelectedConversationId] = useState(1);

  // Sample data
  const userData = {
    name: "Viewer",
    avatar: "https://placehold.co/40x40/E2E8F0/4A5568?text=V"
  };

  const conversations = [
    {
      id: 1,
      name: "Chủ trọ: Anh Minh",
      avatar: "https://placehold.co/48x48/A7F3D0/065F46?text=M",
      lastMessage: "Chào bạn, phòng vẫn còn nhé. Bạn muốn xem lúc nào?",
      time: "10:30",
      unread: 2,
      online: true,
      messages: [
        { 
          sender: 'other', 
          text: 'Chào bạn, mình thấy tin đăng phòng trọ gần ĐH Bách Khoa. Không biết phòng còn trống không ạ?' 
        },
        { 
          sender: 'me', 
          text: 'Chào anh, vâng ạ. Em muốn hỏi phòng còn không ạ?' 
        },
        { 
          sender: 'other', 
          text: 'Chào bạn, phòng vẫn còn nhé. Bạn muốn xem lúc nào?' 
        },
      ]
    },
    {
      id: 2,
      name: "Minh An",
      avatar: "https://placehold.co/48x48/93C5FD/1E40AF?text=A",
      lastMessage: "Ok bạn, hẹn gặp bạn chiều mai nhé.",
      time: "Hôm qua",
      unread: 0,
      online: false,
      messages: [
        { 
          sender: 'me', 
          text: 'Chào An, mình thấy bài đăng tìm người ở ghép của bạn.' 
        },
        { 
          sender: 'other', 
          text: 'Chào bạn, đúng rồi ạ. Bạn cũng đang tìm trọ khu Bách Khoa à?' 
        },
        { 
          sender: 'me', 
          text: 'Đúng rồi, mình xem phòng chiều mai, bạn có muốn đi cùng không?' 
        },
        { 
          sender: 'other', 
          text: 'Ok bạn, hẹn gặp bạn chiều mai nhé.' 
        },
      ]
    },
    {
      id: 3,
      name: "Thanh Lan",
      avatar: "https://placehold.co/48x48/FBCFE8/9D27B0?text=L",
      lastMessage: "Bạn đã gửi một ảnh.",
      time: "Thứ 7",
      unread: 0,
      online: true,
      messages: [
        { 
          sender: 'me', 
          text: 'Chào bạn, mình thấy bạn có nuôi mèo, không biết chủ trọ có khó không ạ?' 
        },
        { 
          sender: 'other', 
          text: 'Chủ trọ ở đây thoải mái lắm bạn, miễn là mình giữ vệ sinh chung là được.' 
        },
        { 
          sender: 'other', 
          type: 'image', 
          text: 'Bạn đã gửi một ảnh.' 
        },
      ]
    }
  ];

  // Get selected conversation
  const selectedConversation = conversations.find(c => c.id === selectedConversationId);

  // Event handlers
  const handleSelectConversation = (conversationId) => {
    setSelectedConversationId(conversationId);
    
    // Mark conversation as read when selected
    const conversation = conversations.find(c => c.id === conversationId);
    if (conversation && conversation.unread > 0) {
      conversation.unread = 0;
      // In a real app, you would update this in your state management/API
    }
  };

  const handleSendMessage = (messageText) => {
    if (!selectedConversation) return;
    
    console.log('Send message:', messageText, 'to conversation:', selectedConversationId);
    
    // In a real app, you would:
    // 1. Send message to API
    // 2. Update local state
    // 3. Update conversation list
    
    // For demo, add message to current conversation
    const newMessage = {
      sender: 'me',
      text: messageText
    };
    
    selectedConversation.messages.push(newMessage);
    selectedConversation.lastMessage = messageText;
    selectedConversation.time = new Date().toLocaleTimeString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleCall = (conversationId) => {
    console.log('Call conversation:', conversationId);
    // Implement call functionality
  };

  const handleVideoCall = (conversationId) => {
    console.log('Video call conversation:', conversationId);
    // Implement video call functionality
  };

  const handleShowInfo = (conversationId) => {
    console.log('Show info for conversation:', conversationId);
    // Show conversation/user info modal
  };

  const handleCreatePost = () => {
    console.log('Create new post');
  };

  return (
    <div className="text-neutral h-screen flex flex-col">
      <Header 
        activeTab="messaging" 
        onCreatePost={handleCreatePost}
        user={userData}
        createButtonText="Tạo bài viết"
      />
      
      {/* Main Content */}
      <main className="container mx-auto flex-grow overflow-hidden">
        <div className="grid grid-cols-12 h-full">
          
          {/* Conversation List */}
          <ConversationList
            conversations={conversations}
            selectedConversationId={selectedConversationId}
            onSelectConversation={handleSelectConversation}
          />

          {/* Chat Screen */}
          <ChatScreen
            conversation={selectedConversation}
            onSendMessage={handleSendMessage}
            onCall={handleCall}
            onVideoCall={handleVideoCall}
            onShowInfo={handleShowInfo}
          />

        </div>
      </main>
    </div>
  );
};

export default Messaging;