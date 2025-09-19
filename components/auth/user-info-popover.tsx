"use client";

import { useUserAuth } from "./user-auth-status";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { User2 } from "lucide-react";

export function UserInfoPopover() {
  const user = useUserAuth();
  const router = useRouter();

  if (!user) return null;

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/50 border-2 border-primary shadow hover:shadow-lg transition-all"
          aria-label="User menu"
        >
          <User2 className="h-5 w-5 text-white" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-72 max-w-[90vw]">
        <div className="flex flex-col items-start gap-3 p-1">
          <div className="font-bold text-lg text-primary-foreground tracking-wide drop-shadow-sm break-words max-w-full">
            {user.displayName || "User"}
          </div>
          <div className="text-sm text-gray-800 font-medium break-all max-w-full">
            {user.email}
          </div>
          <Button variant="outline" onClick={handleLogout} className="mt-3 w-full font-semibold text-base">
            Logout
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
