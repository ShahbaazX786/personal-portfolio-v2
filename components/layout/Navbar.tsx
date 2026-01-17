"use client";

import useTextAnimator from "@/hooks/useTextAnimator";
import { NavbarMenu, NavIcons } from "@/lib/constants/constants";
import { socials } from "@/lib/constants/SocialConstants";
import { renderText } from "@/lib/helpers/component-helpers";
import { WindowKey } from "@/store/types/window.store.type";
import useWindowStore from "@/store/window.store";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  const BrandNameRef = useRef<HTMLParagraphElement | null>(null);
  useTextAnimator(BrandNameRef as any, {
    type: "color",
    from: "#000000",
    to: "#FFFFFF",
    base: "#000000",
    intensity: 1000,
  });

  return (
    <nav>
      <div>
        <Link href={socials[3].link} target="_blank" rel="noopener noreferrer">
          <p className="font-bold" ref={BrandNameRef}>
            {renderText("Shaik Shahbaaz Alam", "text-lg font-georama", 500)}
          </p>
        </Link>
        <ul>
          {NavbarMenu.map(({ id, name, type }) => (
            <li
              key={id}
              className="hover:scale-110 transition-all ease-in-out font-semibold"
              onClick={() => openWindow(type as WindowKey)}
            >
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {NavIcons.map(({ id, img }) => (
            <>
              <li key={id}>
                <Image
                  src={img}
                  className="size-4 icon-hover"
                  alt={`icon-${id}`}
                  width={100}
                  height={100}
                />
              </li>
            </>
          ))}
          <li key={"calender-view"}>
            <Popover>
              <PopoverTrigger
                asChild
                className="hover:scale-110 transition-all ease-in-out"
              >
                <time className="cursor-pointer">
                  {dayjs().format("ddd MMM D h:mm A")}
                </time>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={new Date()}
                  captionLayout="dropdown"
                />
              </PopoverContent>
            </Popover>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
