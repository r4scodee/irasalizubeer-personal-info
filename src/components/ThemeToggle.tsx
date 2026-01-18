"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative w-14 h-8 px-1
        rounded-full
        flex items-center
        bg-muted
        cursor-pointer
        focus:outline-none
    "
      aria-label="Toggle theme"
    >
      <span
        className={`
      absolute top-1/2 left-1
      w-6 h-6 rounded-full bg-background shadow
      flex items-center justify-center
      -translate-y-1/2
      transition-transform duration-300 ease-in-out
      ${isDark ? "translate-x-0" : "translate-x-6"}
    `}
      >
        {isDark ? <Moon size={14} /> : <Sun size={14} />}
      </span>
    </button>
  );
}
