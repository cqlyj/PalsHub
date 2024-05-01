"use client";

import { useUser } from "@clerk/nextjs";
import { Chat, LoadingIndicator } from "stream-chat-react";
import useInitializeChatClient from "./useInitializeChatClient";
import MenuBar from "./MenuBar";
import ChatSideBar from "./ChatSideBar";
import ChatChannel from "./ChatChannel";
import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import useWindowSize from "../../hooks/useWindowSize";
import { mdBreakpoint } from "@/utils/tailwind";

const ChatPage = () => {
  const chatClient = useInitializeChatClient();
  const { user } = useUser();

  const [chatSidebarOpen, setChatSidebarOpen] = useState(false);
  const windowSize = useWindowSize();
  const isLargeScreen = windowSize.width >= mdBreakpoint;

  useEffect(() => {
    if (windowSize.width >= mdBreakpoint) {
      setChatSidebarOpen(false);
    }
  }, [windowSize.width]);

  const handleSidebarOnClose = useCallback(() => {
    setChatSidebarOpen(false);
  }, []);

  if (!user || !chatClient) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingIndicator size={40}></LoadingIndicator>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-100 xl:px-20 xl:py-8">
      <div className="m-auto flex h-full min-w-[350px] max-w-[1600px] flex-col shadow-sm">
        <Chat client={chatClient}>
          <div className="flex justify-center border-b border-b-[#DBDDE1] p-3 md:hidden">
            <button onClick={() => setChatSidebarOpen(!chatSidebarOpen)}>
              {!chatSidebarOpen ? (
                <span className="flex items-center gap-1">
                  <Menu>Menu</Menu>
                </span>
              ) : (
                <X></X>
              )}
            </button>
          </div>
          <div className="flex h-full flex-row overflow-y-auto">
            <ChatSideBar
              user={user}
              show={isLargeScreen || chatSidebarOpen}
              onClose={handleSidebarOnClose}
            ></ChatSideBar>
            <ChatChannel
              show={isLargeScreen || !chatSidebarOpen}
              hideChannelOnThread={!isLargeScreen}
            ></ChatChannel>
          </div>
        </Chat>
      </div>
    </div>
  );
};

export default ChatPage;
