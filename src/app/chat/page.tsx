"use client";

import { UserButton } from "@clerk/nextjs";
import { StreamChat } from "stream-chat";
import {
  Channel,
  ChannelHeader,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

const userId = "user_2fiqwHz6QSRhFlOxhzYBq6jrKDw";

const chatClient = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_KEY!);

chatClient.connectUser(
  {
    id: userId,
    name: "Luo Yingjie",
  },
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8yZmlxd0h6NlFTUmhGbE94aHpZQnE2anJLRHcifQ.w0YsAEh1TYW8N5QAELogdyTHGrBTtD_2WIjpzWbDfGM"
);

const channel = chatClient.channel("messaging", "channel_1", {
  name: "Channel #1",
  members: [userId],
});

const ChatPage = () => {
  return (
    <div>
      <Chat client={chatClient}>
        <Channel channel={channel}>
          <Window>
            <ChannelHeader></ChannelHeader>
            <MessageList></MessageList>
            <MessageInput></MessageInput>
          </Window>
          <Thread></Thread>
        </Channel>
      </Chat>
    </div>
  );
};

export default ChatPage;
