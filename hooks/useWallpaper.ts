"use client";

import { useEffect, useState } from "react";

const TOTAL_WALLPAPERS = 5;
const DEFAULT_WALLPAPER = "/images/default_wallpaper.png";

export function useWallpaper() {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index === null) {
      document.documentElement.style.setProperty(
        "--wallpaper",
        `url(${DEFAULT_WALLPAPER})`
      );
    } else {
      document.documentElement.style.setProperty(
        "--wallpaper",
        `url(/images/wallpaper-${index}.jpg)`
      );
    }
  }, [index]);

  const changeWallpaper = () => {
    setIndex((prev) => {
      if (prev === null) return 1;
      return (prev % TOTAL_WALLPAPERS) + 1;
    });
  };

  const resetWallpaper = () => {
    setIndex(null);
  };

  return { index, changeWallpaper, resetWallpaper };
}
