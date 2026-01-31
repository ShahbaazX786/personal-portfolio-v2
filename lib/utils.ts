import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const getDayTime = (datetime: string) => {
  const time = datetime.split(" ").slice(0, 3).join(" ");
  const date = datetime.split(" ").slice(3).join(" ");
  return { date, time };
};

export { getDayTime };
