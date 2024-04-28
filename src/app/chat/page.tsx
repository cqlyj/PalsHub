import { UserButton } from "@clerk/nextjs";

const ChatPage = () => {
  return (
    <div>
      ChatPage
      <UserButton afterSignOutUrl="/"></UserButton>
    </div>
  );
};

export default ChatPage;
