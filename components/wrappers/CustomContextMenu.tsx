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
import Image from "next/image";

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
              <ContextMenuItem>
                LinkedIn
                <ContextMenuShortcut>
                  <Image
                    src={"/icons/social/linkedin.svg"}
                    alt="LinkedIn"
                    width={100}
                    height={100}
                    className="size-5"
                  />
                </ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Twitter (X)
                <ContextMenuShortcut>
                  <Image
                    src={"/icons/social/twitter.svg"}
                    alt="Twitter"
                    width={100}
                    height={100}
                    className="size-5"
                  />
                </ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Github
                <ContextMenuShortcut>
                  <Image
                    src={"/icons/social/github.svg"}
                    alt="Twitter"
                    width={100}
                    height={100}
                    className="size-5"
                  />
                </ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>
                Email Directly
                <ContextMenuShortcut>
                  <Image
                    src={"/icons/social/gmail.svg"}
                    alt="Twitter"
                    width={100}
                    height={100}
                    className="size-5"
                  />
                </ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                Custom Message{" "}
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuRadioGroup value="pedro">
            <ContextMenuLabel inset>People</ContextMenuLabel>
            <ContextMenuRadioItem value="pedro">
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    </section>
  );
};

export default CustomContextMenu;
