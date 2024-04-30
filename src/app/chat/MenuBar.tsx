import { UserButton } from "@clerk/nextjs";
import { Users } from "lucide-react";

const MenuBar = () => {
  return (
    <div className="flex items-center justify-between gap-3 border-e border-e-[#DBDDE1] bg-white p-3">
      <UserButton afterSignOutUrl="/"></UserButton>
      <div className="flex gap-6">
        <span title="Show users">
          <Users className="cursor-pointer"></Users>
        </span>
      </div>
    </div>
  );
};

export default MenuBar;
