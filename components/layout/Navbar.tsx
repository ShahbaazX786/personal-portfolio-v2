"use client";

import useTextAnimator from "@/hooks/useTextAnimator";
import { locations, NavbarMenu, NavIcons } from "@/lib/constants/constants";
import { socials } from "@/lib/constants/SocialConstants";
import { renderText } from "@/lib/helpers/component-helpers";
import useLocationStore from "@/store/location.store";
import { WindowKey } from "@/store/types/window.store.type";
import useWindowStore from "@/store/window.store";
import dayjs from "dayjs";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();
  const { setTheme } = useTheme();

  const BrandNameRef = useRef<HTMLParagraphElement | null>(null);

  useTextAnimator(BrandNameRef as any, {
    type: "color",
    from: "#000000",
    to: "#FFFFFF",
    base: "#000000",
    intensity: 1000,
  });

  const handleNavIconClick = (id: string) => {
    switch (id) {
      case "mode":
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
        break;

      case "author":
        openWindow("finder");
        setActiveLocation(locations.about);
        break;
      case "search":
        openWindow("finder");
        setActiveLocation(locations.work);
        break;

      default:
        break;
    }
  };

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
            <li
              key={id}
              aria-label={id}
              data-tooltip-id={"navbar-tooltip"}
              data-tooltip-content={id}
              data-tooltip-delay-show={150}
              className="hidden md:block dock-icon"
            >
              <Image
                src={img}
                className="size-4 icon-hover hover:scale-125 transition-all ease-in-out cursor-pointer"
                alt={`icon-${id}`}
                width={100}
                height={100}
                onClick={() => handleNavIconClick(id)}
              />
            </li>
          ))}
          <li key={"calender-view"} className="cursor-pointer">
            <Popover>
              <PopoverTrigger
                asChild
                className="hover:scale-110 transition-all ease-in-out"
              >
                <time className="cursor-pointer max-w-20 ">
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
      <Tooltip
        id="navbar-tooltip"
        place="bottom"
        className="py-1! px-3! w-fit! text-center! text-xs font-semibold rounded-md! bg-blue-200! text-blue-900! shadow-2xl! capitalize"
      />
    </nav>
  );
};

export default Navbar;
