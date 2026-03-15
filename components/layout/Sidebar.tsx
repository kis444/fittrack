"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  CalendarDays,
  Dumbbell,
  Salad,
  BookOpen,
  TrendingUp,
  BarChart2,
  Settings,
  LogOut,
  Activity,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/planner", label: "Planner", icon: CalendarDays },
  { href: "/activities", label: "Activities", icon: Dumbbell },
  { href: "/nutrition", label: "Nutrition", icon: Salad },
  { href: "/recipes", label: "Recipes", icon: BookOpen },
  { href: "/progress", label: "Progress", icon: TrendingUp },
  { href: "/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <aside className="fixed top-0 left-0 h-screen w-60 bg-white border-r border-gray-100 shadow-soft flex flex-col z-30">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent-dark flex items-center justify-center">
            <Activity className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-bold text-lg text-secondary tracking-tight">FitTrack</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={cn("nav-link", active && "nav-link-active")}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User / Logout */}
      <div className="px-3 py-4 border-t border-gray-100">
        <div className="px-4 py-2 mb-1">
          <p className="text-xs font-semibold text-gray-800 truncate">{session?.user?.name}</p>
          <p className="text-xs text-neutral truncate">{session?.user?.email}</p>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="nav-link w-full text-red-400 hover:bg-red-50 hover:text-red-500"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign out</span>
        </button>
      </div>
    </aside>
  );
}
