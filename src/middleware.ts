import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware();

export const config = {
  matcher: ["/chat(.*)", "/api/get-token"],
};
