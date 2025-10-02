"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed top-6 right-6 z-50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          {theme === "light" && (
            <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
          )}
          {theme === "dark" && (
            <Moon className="h-[1.2rem] w-[1.2rem] text-blue-400" />
          )}
          {theme === "system" && (
            <Monitor className="h-[1.2rem] w-[1.2rem] text-gray-600 dark:text-gray-300" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          <Sun className="mr-2 h-4 w-4 text-yellow-500" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          <Moon className="mr-2 h-4 w-4 text-blue-400" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          <Monitor className="mr-2 h-4 w-4 text-gray-600 dark:text-gray-300" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Simple toggle version (alternative)
export function SimpleThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-3 right-4 sm:top-6 hover:cursor-pointer sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl group"
    >
      <Sun className="h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
      <Moon className="absolute h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />

      <div className="sm:hidden absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-active:opacity-100 transition-opacity duration-200 pointer-events-none">
        {theme === "dark" ? "Light" : "Dark"}
      </div>
    </Button>
  );
}
