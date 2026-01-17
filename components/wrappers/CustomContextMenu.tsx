import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useWallpaper } from "@/hooks/useWallpaper";
import { socials } from "@/lib/constants/SocialConstants";
import Image from "next/image";
import Link from "next/link";

const CustomContextMenu = () => {
  const { resetWallpaper, changeWallpaper } = useWallpaper();
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <section className="w-full h-full">
      <ContextMenu>
        <ContextMenuTrigger className="flex w-full h-full items-center justify-center rounded-md"></ContextMenuTrigger>
        <ContextMenuContent className="w-52">
          <ContextMenuItem
            inset
            className="bg-green-400 hover:bg-green-200 cursor-pointer"
          >
            Check these out 👇
          </ContextMenuItem>
          <ContextMenuItem
            inset
            onClick={changeWallpaper}
            className="cursor-pointer"
          >
            Change Wallpaper
          </ContextMenuItem>
          <ContextMenuItem inset onClick={resetWallpaper}>
            Reset Wallpaper 😤
          </ContextMenuItem>
          <ContextMenuItem inset onClick={refreshPage}>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked>
            Show Bookmarks
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>My Socials</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-44">
              {socials.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  {item.text === "Email" && <ContextMenuSeparator />}
                  <ContextMenuItem className="cursor-pointer">
                    {item.text === "Email"
                      ? item.text + " " + "Directly"
                      : item.text}
                    <ContextMenuShortcut>
                      <Image
                        src={item.icon}
                        alt="LinkedIn"
                        width={100}
                        height={100}
                        className="size-5"
                      />
                    </ContextMenuShortcut>
                  </ContextMenuItem>
                </Link>
              ))}
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                Custom Message{" "}
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuContent>
      </ContextMenu>
    </section>
  );
};

export default CustomContextMenu;
