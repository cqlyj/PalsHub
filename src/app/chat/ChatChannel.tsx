import {
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

interface ChatChannelProps {
  show: boolean;
  hideChannelOnThread: boolean;
}

const ChatChannel = ({ show, hideChannelOnThread }: ChatChannelProps) => {
  return (
    <div className={`h-full w-full ${show ? "block" : "hidden"}`}>
      <Channel>
        <Window hideOnThread={hideChannelOnThread}>
          <ChannelHeader></ChannelHeader>
          <MessageList></MessageList>
          <MessageInput></MessageInput>
        </Window>
        <Thread></Thread>
      </Channel>
    </div>
  );
};

export default ChatChannel;
