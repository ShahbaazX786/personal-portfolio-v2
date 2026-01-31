"use client";

import { locations, NavIcons } from "@/lib/constants/constants";
import useLocationStore from "@/store/location.store";
import useWindowStore from "@/store/window.store";
import Image from "next/image";
import CalenderView from "./CalenderView";
import ThemeToggler from "./ThemeToggler";
import { Tooltip } from "react-tooltip";

const NavIconTray = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const handleNavIconClick = (id: string) => {
    switch (id) {
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
    <div>
      <ul>
        {NavIcons.map(({ id, img }) =>
          id === "theme" ? (
            <li
              key={id}
              aria-label={id}
              data-tooltip-id={"navbar-tooltip"}
              data-tooltip-content={id}
              data-tooltip-delay-show={150}
              className="hidden md:block dock-icon"
            >
              <ThemeToggler id={id} img={img} />
            </li>
          ) : (
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
          ),
        )}
        <li key={"calender-view"} className="cursor-pointer">
          <CalenderView />
        </li>
      </ul>
      <Tooltip
        id="navbar-tooltip"
        place="bottom"
        className="py-1! px-3! w-fit! text-center! text-xs font-semibold rounded-md! bg-blue-200! text-blue-900! shadow-2xl! capitalize"
      />
    </div>
  );
};

export default NavIconTray;
