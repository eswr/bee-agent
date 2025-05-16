import { ChatWidget } from '@/components/ChatWidget';
import { StoreHeader } from '@/components/StoreHeader';

const Chat = () => {

  return (
    <div className="min-h-screen bg-[#F5F5DC]/30">
      <StoreHeader />
      
      <ChatWidget />
    </div>
  );
};

export default Chat;