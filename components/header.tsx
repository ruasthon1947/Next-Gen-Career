"use client"


import Link from "next/link"
import Image from "next/image"
import { useState, memo } from "react"
import { Menu } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { UserAuthStatus } from "@/components/auth/user-auth-status"
import { UserInfoPopover } from "@/components/auth/user-info-popover"


function HeaderComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between flex-wrap px-2 sm:px-4">
        <div className="flex items-center space-x-2 min-w-0">
          <Link href="/" className="flex items-center space-x-2 min-w-0">
            <Image src="/nextgen.jpeg" alt="Next Gen Careers Logo" width={36} height={48} className="h-12 w-9 rounded-full object-cover" style={{ borderRadius: '48% 48% 60% 60% / 60% 60% 48% 48%' }} priority={true} />
            <span className="text-xl brand-font truncate max-w-[120px] sm:max-w-none"><span className="font-bold">Next Gen</span> Careers</span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-4 sm:space-x-5 flex-wrap">
          <Link href="/assessment" className="text-base font-bold text-black/90 dark:text-white/90 hover:text-primary transition-colors">
            Career Assessment
          </Link>
          <Link href="/skills" className="text-base font-bold text-black/90 dark:text-white/90 hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="/dashboard" className="text-base font-bold text-black/90 dark:text-white/90 hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link href="/guidance" className="text-base font-bold text-black/90 dark:text-white/90 hover:text-primary transition-colors">
            Guidance
          </Link>
        </nav>

        {/* Right side: Theme, User, Mobile menu */}
        <div className="flex items-center space-x-2 sm:space-x-2">
          <ThemeToggle />
          <UserAuthStatus
            fallback={
              <>
                <Button
                  asChild
                  variant="outline"
                  className="hover:bg-secondary/80 transition-colors duration-200 bg-transparent"
                >
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button asChild className="hover:bg-primary/90 transition-colors duration-200">
                  <Link href="/signup">Get Started</Link>
                </Button>
              </>
            }
          >
            <UserInfoPopover />
          </UserAuthStatus>
          {/* Mobile menu button - moved here for better alignment */}
          <button
            className="p-2 rounded-md hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary md:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile dropdown menu (right, under button) */}
        {menuOpen && (
          <div
            className="absolute right-2 top-16 z-50 w-48 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col py-2 md:hidden transition-all duration-300 ease-out animate-fadeIn"
            style={{ opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)' }}
            onClick={e => e.stopPropagation()}
          >
            <Link href="/assessment" className="px-4 py-2 text-base font-bold text-black hover:bg-gray-100 transition-colors" onClick={() => setMenuOpen(false)}>
              Career Assessment
            </Link>
            <Link href="/skills" className="px-4 py-2 text-base font-bold text-black hover:bg-gray-100 transition-colors" onClick={() => setMenuOpen(false)}>
              Skills
            </Link>
            <Link href="/dashboard" className="px-4 py-2 text-base font-bold text-black hover:bg-gray-100 transition-colors" onClick={() => setMenuOpen(false)}>
              Dashboard
            </Link>
            <Link href="/guidance" className="px-4 py-2 text-base font-bold text-black hover:bg-gray-100 transition-colors" onClick={() => setMenuOpen(false)}>
              Guidance
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export const Header = memo(HeaderComponent);
