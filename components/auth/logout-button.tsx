"use client"

import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function LogoutButton() {
  const router = useRouter()
  const handleLogout = async () => {
    await signOut(auth)
    router.push("/login")
  }
  return (
    <Button variant="outline" onClick={handleLogout} className="ml-2">
      Logout
    </Button>
  )
}
