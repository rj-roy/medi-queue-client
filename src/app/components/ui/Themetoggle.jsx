"use client";
import { Moon, Sun } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
// import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // const { theme, setTheme } = useState();
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) return null;

  // const isDark = theme === "dark";

  return (
    <div
    //   onClick={() => setTheme(isDark ? "light" : "dark")}
      className="ml-5 flex items-center justify-center w-8 h-8 rounded-full border border-zinc-300  bg-white  transition-all duration-300"
    >
      <Sun className="size-5 text-yellow-500" />
      {/* {isDark ? (
        <Moon className="size-5 text-cyan-400" />
      ) : (
        <Sun className="size-5 text-yellow-500" />
      )} */}
    </div>
  );
}