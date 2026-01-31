import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggler = ({ id, img }: { id: string; img: string }) => {
  const { setTheme, theme } = useTheme();

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Image
          src={img}
          className="size-4 icon-hover hover:scale-125 transition-all ease-in-out cursor-pointer"
          alt={`icon-${id}`}
          width={100}
          height={100}
        />
      </PopoverTrigger>
      <PopoverContent className="w-44">
        <PopoverHeader>
          <PopoverTitle>Change Theme?</PopoverTitle>
          <PopoverDescription>
            <div className="flex w-full justify-center items-center gap-2 mt-2">
              <Button disabled={theme === "light"} onClick={handleThemeToggle}>
                Light
              </Button>
              <Button disabled={theme === "dark"} onClick={handleThemeToggle}>
                Dark
              </Button>
            </div>
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
};

export default ThemeToggler;
