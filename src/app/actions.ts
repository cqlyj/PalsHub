"use server";

import { clerkClient } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

export async function getToken() {
  const streamApiKey = process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY;
  const streamApiSecret = process.env.STREAM_VIDEO_API_SECRET;

  if (!streamApiKey || !streamApiSecret) {
    throw new Error("Missing Stream API Key or Secret");
  }

  const user = await currentUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const streamClient = new StreamClient(streamApiKey, streamApiSecret);

  const expirationTime = Math.floor(Date.now() / 1000) + 3600; // 1 hour

  const issuedAt = Math.floor(Date.now() / 1000) - 60;

  const token = streamClient.createToken(user.id, expirationTime, issuedAt);

  return token;
}

export async function getUserIds(emailAddress: string[]) {
  const response = await clerkClient.users.getUserList({
    emailAddress: emailAddress,
  });

  return response.map((user) => user.id);
}
