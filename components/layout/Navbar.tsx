"use client";

import { NavbarMenu, NavIcons } from "@/lib/constants/constants";
import { WindowKey } from "@/store/types/window.store.type";
import useWindowStore from "@/store/window.store";
import dayjs from "dayjs";
import Image from "next/image";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  return (
    <nav>
      <div>
        <Image
          src={"/icons/logo.svg"}
          alt="Apple Logo"
          width={100}
          height={100}
          className="size-4"
        />
        <p className="font-bold">Shahbaaz&apos;s Portfolio</p>
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
          <li>
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
