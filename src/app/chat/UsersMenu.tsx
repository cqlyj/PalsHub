import { useEffect, useState } from "react";
import {
  Avatar,
  useChatContext,
  LoadingChannels as LoadingUsers,
} from "stream-chat-react";
import { UserResource } from "@clerk/types";
import { ArrowLeft } from "lucide-react";
import { Channel } from "stream-chat";

interface UsersMenuProps {
  loggedInUser: UserResource;
  onClose: () => void;
  onChannelSelected: () => void;
}

const UsersMenu = ({
  loggedInUser,
  onChannelSelected,
  onClose,
}: UsersMenuProps) => {
  const { client, setActiveChannel } = useChatContext();

  const [users, setUsers] = useState<(UserResource & { image?: string })[]>();

  useEffect(() => {
    async function loadInitialUsers() {
      try {
        const response = await client.queryUsers(
          {
            id: { $ne: loggedInUser.id },
          },
          { id: 1 }
        );
        setUsers(response.users);
      } catch (error) {
        console.error(error);
        alert("Failed to load users");
      }
    }
    loadInitialUsers();
  }, [client, loggedInUser.id]);

  function handleChannelSelected(channel: Channel) {
    setActiveChannel(channel);
    onChannelSelected();
  }

  async function startChatWithUser(userId: string) {
    try {
      const channel = client.channel("messaging", {
        members: [userId, loggedInUser.id],
      });
      await channel.create();
      handleChannelSelected(channel);
    } catch (error) {
      console.error(error);
      alert("Failed to start chat with user");
    }
  }

  return (
    <div className="str-chat absolute z-10 h-full w-full border-e border-e-[#DBDDE1] bg-white">
      <div className="flex items-center gap-3 p-3 text-lg font-bold">
        <ArrowLeft onClick={onClose} className="cursor-pointer">
          User
        </ArrowLeft>
      </div>
      <div>
        {!users && <LoadingUsers></LoadingUsers>}
        {users?.map((user) => (
          <UserResult
            key={user.id}
            user={user}
            onUserClicked={startChatWithUser}
          ></UserResult>
        ))}
      </div>
    </div>
  );
};

interface UserResultProps {
  user: UserResource & { image?: string };
  onUserClicked: (userId: string) => void;
}

function UserResult({ user, onUserClicked }: UserResultProps) {
  return (
    <button
      className="mb-3 flex w-full items-center gap-2 p-2 hover:bg-[#e9eaed]"
      onClick={() => onUserClicked(user.id)}
    >
      <span>
        <Avatar
          image={user.image}
          name={user.fullName || user.id}
          size={40}
        ></Avatar>
      </span>
      <span className="overflow-hidden text-ellipsis whitespace-nowrap">
        {user.fullName || user.id}
      </span>
      {user.online && <span className="text-xs text-green-500">Online</span>}
    </button>
  );
}

export default UsersMenu;
